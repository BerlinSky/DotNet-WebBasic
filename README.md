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
                                                             
## Seed data values                                          
                                                             
Add an override method inside Persistence/DataContext.cs     
                                                             
```bash                                                      
> dotnet ef migrations add SeedValues -p Persistence/ -s API/
```                                                          
                                                
Use SQLite Explorer to view the data seeded     
                                                
## Use Dependency Injection                     
                                                
Add a constructor for API/ValuesController      
Update ActionResult (2) methods to make it async
                                                    
## Use postman to test the API                      
                                                    
Install Postman client tool                         
                                                    
## Create a React App                               
                                                    
```bash                                             
# Install the create-react Cli                      
> npm use 12                                                         
> npx create-react Clinet-App --use-npm --typescript                 
> cd client-aap                                                      
> npm start                                                          
```                                                                  
                                                                     
Update title in the Index.html head                                  
Add "experimentalDecorator": true to tyconfig.json                   
Install React DevTools Chrom extension                               
                                                                     
Convert App component to a react Class component (Client-App/App.tsx)
                                                                     
## Using React state                                                 
                                                                     
```bash                                                              
# Install axios                                                      
> npm i -S axios                                                     
```                                                                  
                                                                     
## CORS Support to API                                               
                                                                     
Add "Services.AddCors()" in API/Startup.cs                           
Add "app.UseCors("CorsPolicy")                                       
                                                                     
Using Semantic UI React                                         
                                                                
```bash                                                          
> npm i -S semantic-ui-react                                     
```                                                              
                                                                 
Add senantic UI css CDN link to the Client-App/public/index.html 
Update src/App.tsx to use semantic-ui header component with icon       
Utilize semantic ui List component                                     
                                                                       
## Add the Activity Entity                                             
                                                                       
Using a VS Code plug-in, C# Extensions, to add Domain/Activity.cs      
Using Guid for Id type                                                 
Adding DbSet in Persistence/DataContext.cs                             
                                                                       
```bash                                                                
> dotnet ef migration add "ActivityEntiryAdded" -p Persistence/ -s API/
```                                                                
                                                                   
Using VS Code Snippets                                             
Adding the code sippets file to the "vscode" folder                                                      
Using prefix in the code sippets file to bring in the code snippets                                      
Updating API?program.cs: Seed.SeedData(Context)                                                          
                                                                                                         
## Understand CQRS - Commands and Queries                                                                
                                                                                                         
## MdeiatR and Clean Architecture                                                                        
                                                                                                         
## Create a Query Handler                                                                                
                                                                                                         
1. Adding mediatr > MediateR.Extension.Microsoft > Package Manager > Latest Version into Application project
2. Adding "Activities" folder to Applications/       
3. Adding List.cs to Activities folder               
                                                     
## Create the Activities API Controller              
                                                     
1. Add the ActivitiesController.cs in API/Controllers
2. Add Route attribute                              
3. Add [HttpGet]                                    
4. Add Services.AddMediateR to API/Startup.cs       
                                                    
## Add the Detail Hander                            
                                                    
1. Create Detail.cs in Applicaiton/Activities folder
                                                   
    1.1. Add Query class                           
    1.2. Add Handler class                         
                                                   
2. Add [HttpPut] method in API/ActivitiesController
3. Test it with Postman                            
                                                   
## Add Create Handler                              
                                                   
1. Create Create.cs in Applicaiton/Activities folder
                                                   
    1.1. Add Command class                                 
    1.2. Add Handler class                                 
                                                           
2. Add [HttpPost] method in API/ActivitiesController       
3. Test it with Postman                                    
                                                           
## Manage the BoilerPlate Code                             
                                                           
1. Create VS Code User Snippets                            
2. Create handlerSnippets.code-Snippets                    
3. Use snippet-generator.app site to generate code snippets
                                                           
## Add a Edit Handler                                      
                                                           
1. Create Edit.cs in Applicaiton/Activities folder         
                                                           
    1.1. Use "chandler to invoke VS Code snippet                                 
    1.2. Add Handler logic                                 
                                                           
2. Add [HttpPut] method in API/ActivitiesController        
3. Test it with Postman                                    
                                                           
## Add a Delete Handler                                    
                                                           
1. Create Delete.cs in Applicaiton/Activities folder                                  
                                                                                      
    1.1. Use "chandler to invoke VS Code snippet                                      
    1.2. Add Handler logic                                                            
                                                                                      
2. Add [HttpDelete] method in API/ActivitiesController                                
3. Test it with Postman                                                               
                                                                                      
## React App Folder Structure                                                         
                                                                                      
### There are two recommended methods by [https://reactjs.org/docs/faq-structure.html]
                                        
1. By feature                                   
2. By file types                                
                                                
### Add two folders to client-app/src           
                                                
1. app/                                         
2. features                                     
                                                
## Get a list of activities from the API        
                                                
1. Update the endpoint in client-app/.../App.tsx
2. Update state to activities                 
                                              
## Add an Activity interface                  
                                              
1. Add a new "models" folder in src/app folder
2. Add "activity.ts" in the models folder
3. Add IState in activity.ts
