# Walk Skeleton
                                     
A tiny implemtation of the target system that performsa small end-to-end function. It should link together the main architectural components.
                                     
## Key Concepts                      
                                     
1. Entity Framework: Convention-based                  
2. Clean Architecture                   
3. DotNet CLI                        
4. Code-First approach to create database                                  
                                         
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
                                                                     
## Creating a Domain Entity                                          
                                                                     
```c#                                                                
// Inside Domain project                                             
public class Value                                                   
{                                                                    
    public int Id { get; set; }                                      
    public string Name { get; set; }                                 
}                                                                    
```                                                     
                                                        
## Creating DbContext and Service                       
                                                        
Add DataContext class under Persistence                 
Add Entity Framework with Nuget package manager         
Execute a series of tedious steps to add nuget packages 
                                                        
## Entity Framework: First Migration                            
                                                                
```bash                                                         
# Install .Net Entity Framework                                                
> dotnet tool install --local dotnet-ef --version 3.0.0         
                                                                
# Verify the installation                                       
> dotnet ef                                                     
                                                                
# Create a first migration                                      
> dotnet ef migrations add InitialCreate -p Persistence/ -s API/
```                                                             
                                                                
## Create the database                        
                                              
Update the Main() method in API/Program.cs    
                                              
```bash                                       
> cd APT                                      
> dotnet watch run                            
```                                           
                                              
Use SQLite Explorer to view the tables created                                         