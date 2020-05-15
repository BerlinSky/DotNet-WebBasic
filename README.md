# Walk Skeleton
                                     
A tiny implemtation of the target system that performsa small end-to-end function. It should link together the main architectural components.
                                     
## Key Concepts                      
                                     
1. Entity Framework                  
2. Clean Architecture                   
3. DotNet CLI                           
                                        
## Using the dotnet Cli                                                                                                   
                                                                                                                          
```bash                                                                                                                   
> dotnet --version                                                                                                        
> dotnet --info                                                                                                           
                                                                                                                          
# create a new solution                                                                                                   
> dotnet new sln                                                                                                          
                                                                                                                          
# create projects                                                                                                         
> dotnet new classlib -n Domain                                                                                           
> dotnet new classlib -n Application                                                                                      
> dotnet new classlib -n Persistence                                                                                      
> dotnet new webapi -n API                                                                                                
```                                                                                                                         
                                                                                                                            
## Notes                                                                                                                    
                                                                                                                            
### Miscellaneous                                                                                                           
                                                                                                                            
1. Comment out "app.UseHttpsRedirection()" from API/Startup.cs                                                              
                                                                                                                            
2. Remove "https" endpoint from API/Properties/launchSettings.json                                                          