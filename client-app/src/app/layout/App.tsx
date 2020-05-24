import React, { useState, useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';               
import { IActivity } from '../models/activity';                    
import { NavBar } from '../../features/nav/NavBar';                
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';            
import { LoadingComponent } from './LoadingComponent';
                                                                    
const App = () => {                                                 
  const [activities, setActivities] = useState<IActivity[]>([]);    
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);   
  const [loading, setLoading] = useState(true)
                                                                                   
  const handleSelecteActivity = (id: string) => {                                  
    setSelectedActivity(activities.filter(a => a.id === id)[0]);   
    setEditMode(false)                                        
  }                                                                
                                                                   
  const handleOpenCreateFrom = () => {                                      
    setSelectedActivity(null);                                              
    setEditMode(true);                                                      
  }                                                                         
                                                                            
  const handleCreateActivity = (activity: IActivity) => {     
    agent.Activities.create(activity).then(() => {        
      setActivities([...activities, activity])                       
      setSelectedActivity(activity)                                  
      setEditMode(false)                                             
    })                                                    
  }                                                                         
                                                                       
  const handleEditActivity = (activity: IActivity) => {   
    agent.Activities.update(activity).then(() => {   
      setActivities([...activities.filter(a => a.id !== activity.id), activity])                                              
      setSelectedActivity(activity)                                      
      setEditMode(false)                                                 
    })                                                     
  }                                                                    
                                                                       
  const handleDeleteActivity = (id: string) => {           
    agent.Activities.delete(id).then(() => {               
      setActivities([...activities.filter(a => a.id !== id)])            
    })                                                     
  }                                                                    
                                                                            
  useEffect(() => {                                                                
    // axios.get<IActivity[]>('http://localhost:5000/api/activities/') 
    agent.Activities.list()                                   
      .then((response) => {                                            
        let activities: IActivity[] = []                               
        response.forEach((activity) => {                            
          activity.date = activity.date.split('.')[0]                  
          activities.push(activity)                                    
        })                                                             
        setActivities(activities)                                                      
      })                                                          
      .then(() => setLoading(false))                              
    }, []);                                                                                 
                                                                  
    if (loading) return <LoadingComponent content='Loading ...' />
                                                                  
    return (                                                                              
      <Fragment>                                                                          
        <NavBar openCreateForm={handleOpenCreateFrom} />                                                                        
        <Container style={{ marginTop: '7em' }}>                                          
          <ActivityDashboard                                                       
            activities={activities}                                                
            selectActivity={handleSelecteActivity}                                 
            selectedActivity={selectedActivity}                              
            editMode={editMode}                                              
            setEditMode={setEditMode}                                       
            setSelectedActivity={setSelectedActivity}                   
            createActivity={handleCreateActivity}                       
            editActivity={handleEditActivity}                           
            deleteActivity={handleDeleteActivity}                           
          />                                                                       
        </Container>                                                                      
      </Fragment>                                                                         
    );                                                                                    
}                                                                                         
                                                                                          
export default App;                                                                       
                                                                                          