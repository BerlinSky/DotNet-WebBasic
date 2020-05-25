import React, { SyntheticEvent, useContext } from 'react'
import { Grid } from 'semantic-ui-react'     
import ActivityList from './ActivityList'                                                    
import ActivityDetails from '../details/ActivityDetails'                                     
import ActivityForm from '../Form/ActivityForm'                                              
import { observer } from 'mobx-react-lite'              
import ActivityStore from '../../../app/stores/activityStore'
                                                                                                 
interface IProps {                                                                               
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;                                       
  target: string;                                            
}                                                                                                
                                                                                                 
const ActivityDashboard: React.FC<IProps> = ({               
  deleteActivity,                                            
  submitting,                                                
  target                                                     
}) => {                                                      
                                                             
  const activityStore = useContext(ActivityStore);           
  const { editMode, selectedActivity } = activityStore;      
                                                             
  return (                                                   
    <div>                                                    
      <Grid>                                                 
        <Grid.Column width={10}>                             
          <ActivityList                                         
            deleteActivity={deleteActivity}                     
            submitting={submitting}                             
            target={target}                                     
          />                                                    
        </Grid.Column>                                          
        <Grid.Column width={6}>                                 
          {selectedActivity && !editMode && (                   
            <ActivityDetails />                                   
              // setEditMode={setEditMode}                         
            //   setSelectedActivity={setSelectedActivity}         
            // />                                                  
          )}                                                    
          {editMode && (                                        
            <ActivityForm                                       
              // eslint-disable-next-line                       
              key={selectedActivity && selectedActivity.id || 0}
              activity={selectedActivity!}                      
            />                                                  
          )}                                                    
        </Grid.Column>                                          
      </Grid>                                                   
    </div>                                                      
  )                                                             
}                                                                                                                     
                                                                
export default observer(ActivityDashboard);                     