import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';
                                                                           
axios.defaults.baseURL = 'http://localhost:5000/api';                                               
                                                                           
const responseBody = (response: AxiosResponse) => response.data;           
                                                                           
const requetsts = {                                                         
  get: (url: string) => axios.get(url).then(responseBody),                  
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),  
  delete: (url: string) => axios.delete(url).then(responseBody),            
}                                                                           
                                                                            
const Activities = {                                                        
  list: (): Promise<IActivity[]> => requetsts.get('/activities'),                                 
  details: (id: string) => requetsts.get(`/activities/${id}`),              
  create: (activity: IActivity) => requetsts.post(`/activities`, activity), 
  update: (activity: IActivity) => requetsts.put(`/activities/${activity.id}`, activity),  
  delete: (id: string) => requetsts.get(`/activities/${id}`),               
}                                                                          
                                                                           
export default {                                                           
  Activities                                                               
}                                                                          