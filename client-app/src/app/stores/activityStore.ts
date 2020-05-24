import { observable, action } from 'mobx';
import { IActivity } from '../models/activity';
import { createContext } from 'react';       
import agent from '../api/agent';            
                                             
class ActivityStore {                             
  @observable activities: IActivity[] = [];                          
  @observable loadingInitial = false;                                
                                                                     
  @action loadActivities = () => {                                   
    this.loadingInitial = true;                                      
                                                                     
     agent.Activities.list()                                         
     .then((activities) => {                                            
        // let activities: IActivity[] = []                               
        activities.forEach((activity) => {                               
          activity.date = activity.date.split('.')[0]                  
          this.activities.push(activity)                                    
        })                                                             
      })                                                               
      .finally(() => this.loadingInitial = false);                   
  }                                                                  
                                                                     
}                                                                    
                                                                     
export default createContext(new ActivityStore());                   