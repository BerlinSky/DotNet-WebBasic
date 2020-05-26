import { observable, action, computed, configure, runInAction } from 'mobx';
import 'mobx-react-lite/batchingForReactDom'
import { IActivity } from '../models/activity';
import { createContext, SyntheticEvent } from 'react';                 
import agent from '../api/agent';                                                
                                            
configure({ enforceActions: 'always' })        
                                               
class ActivityStore {                                      
  @observable activityRegistry = new Map();                
  @observable activities: IActivity[] = [];                                      
  @observable selectedActivity: IActivity | undefined;                           
  @observable loadingInitial = false;                                            
  @observable editMode = false;                                                  
  @observable submitting = false;                    
  @observable target = ''                            
                                                                                 
  @computed get activitiesByDate() {                                             
    return Array.from(this.activityRegistry.values())  
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))                                                                            
  }                                                                              
                                                                                 
  @action loadActivities = async () => {                                         
    this.loadingInitial = true;                                                  
                                                                                 
    try {                                                                        
      const activities = await agent.Activities.list() 
      runInAction('Loading activities ...', () => {          
        activities.forEach((activity) => {                                         
          activity.date = activity.date.split('.')[0]                              
          // this.activities.push(activity)                  
          this.activityRegistry.set(activity.id, activity)   
        })                                                                         
        this.loadingInitial = false                                                
      })                                                     
    }                                                                            
    catch (error) {                                                              
      runInAction('Loading activities error...', () => {                            
        this.loadingInitial = false                                                
      })                                             
      console.log(error);                                                        
    }                                                                            
  }                                                                              
                                                                                 
  @action createActivity = async (activity: IActivity) => {                      
    this.submitting = true                                                       
                                                                                 
    try {                                                                        
      await agent.Activities.create(activity)                                    
      runInAction('Create activity ...', () => {                            
        this.activityRegistry.set(activity.id, activity)     
        this.editMode = false                                                      
        this.submitting = false                                                    
      })                                             
    }                                                                            
    catch (error) {                                  
       runInAction('Creating activity error ...', () => {                           
         this.submitting = false                                                    
      })                                               
      console.log(error);                                                        
    }                                                                            
  }                                                                              
                                                          
  @action editActivity = async (activity: IActivity) => {
    this.submitting = true                             
                                                       
    try {                                              
      await agent.Activities.update(activity)          
      runInAction('Editing activity ...', () => {                            
         this.activityRegistry.set(activity.id, activity) 
         this.selectedActivity = activity                                            
         this.editMode = false                                                       
         this.submitting = false                                                     
      })                                               
    }                                                                             
    catch (error) {                                    
      runInAction('Edit activity error ...', () => {                              
        this.submitting = false                                                     
      })                                               
      console.log(error);                                                         
    }                                                                             
  }                                                                               
                                                                                  
  @action deleteActivity = async (e: SyntheticEvent<HTMLButtonElement>, id: string)  => {
    this.submitting = true                                                        
    this.target = e.currentTarget.name                 
                                                       
    try {                                              
      await agent.Activities.delete(id)                
      runInAction('Deleting activity ...', () => {                              
        this.activityRegistry.delete(id)                 
        this.submitting = false                          
        this.target = ''                                 
      })                                               
    } catch (error) {                                  
      runInAction('Delete activity error ...',() => {                              
        this.submitting = false                          
        this.target = ''                                 
      })                                               
      console.log(error);                                                         
    }                                                  
  }                                                                               
                                                                                  
  @action openCreateForm = () => {                                                
    this.editMode = true                                                          
    this.selectedActivity = undefined                                             
  }                                                                               
                                                                                  
  @action openEditForm = (id: string) => {                                        
    this.selectedActivity = this.activityRegistry.get(id)                         
    this.editMode = true                                                          
  }                                                                               
                                                                                  
  @action cancelSelectedActivity = () => {                                        
    this.selectedActivity = undefined                                             
  }                                                                               
                                                                                  
  @action cancelFormOpen = () => {                                                
    this.editMode = false                                                         
  }                                                                               
                                                                                  
  @action selectActivity = (id: string) => {                                      
    this.selectedActivity =  this.activityRegistry.get(id)                        
    this.editMode = false;                                                        
  }                                                                               
                                                                                  
}                                                                                 
                                                                                  
export default createContext(new ActivityStore());                                