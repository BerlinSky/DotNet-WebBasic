import React from 'react'
import { Segment, Form } from 'semantic-ui-react'
                                          
export const ActivityForm = () => {       
  return (                                
    <Segment>                             
      <Form>                              
        <Form.Input placeholder='Title' />  
        <Form.TextArea placeholder='Description' />
        <Form.Input placeholder='Category' />  
        <Form.Input type='date' row={2} placeholder='Date' />  
        <Form.Input placeholder='City' />   
        <Form.Input placeholder='Venue' />  
      </Form>                               
    </Segment>                              
  )                                         
}                                           
                                            