```
________/\\\\\_______________________________________/\\\__        
 ______/\\\///_______________________________________\/\\\__       
  _____/\\\___________________________________________\/\\\__      
   __/\\\\\\\\\_______/\\\\\\\\______/\\\\\\\\_________\/\\\__     
    _\////\\\//______/\\\/////\\\___/\\\/////\\\___/\\\\\\\\\__    
     ____\/\\\_______/\\\\\\\\\\\___/\\\\\\\\\\\___/\\\////\\\__   
      ____\/\\\______\//\\///////___\//\\///////___\/\\\__\/\\\__  
       ____\/\\\_______\//\\\\\\\\\\__\//\\\\\\\\\\_\//\\\\\\\/\\_ 
        ____\///_________\//////////____\//////////___\///////\//__
```

## Feed ##
version 0.0.1 <br />

Feed is a full stack application based on YCombinator's Hacker News and Reddit.<br />
<br />
This project is currently in development and is not live. You may find the prototype of this project on [Figma](https://www.figma.com/file/HzivhUzguYBbHc5NgVi0af/feed---wireframe?node-id=0%3A1&t=ajr0YtotOCE1jcUO-1).

## notes ##
The development of this project is currently on pause. Ultimately I started this project with the plan of implementing best practices and TypeScript on the frontend, while determining the best way to structure the backend and business layers. I've since hit the point in development where I need to start implementing the remainder of the project.
<br />
<br />
While working on the frontend, I wanted to answer two questions before moving on:
1. REST API versus GraphQL API
2. How to structure the comment section
<br />
Regarding api choice, I've decided to go with GraphQL. The most performant way to structure the requests is by separately calling user, posts and comments. User would be called on login, with all posts being called on the directory page. The comments call would only be called on a single post page, since the bulk of the data for a post would lie here. This is opposed to calling for all posts on the directory page including comments, which could nest recursively and massively deter performance.
<br />
<br />
While REST works, I prefer the explicit structure with GraphQL for defining these 3 types of calls. For example, I would be able to specify the post call to determine if it has been saved/hidden by the current user, rather than calling the post and the user separately and cross-examining the relationships. I could perform the latter, or keep the user call (on login) to simply their credentials and karma, keeping it as light weight as possible.
<br />
<br />
While I was able to figure out how I want to build my API, determining how to structure the nested comments section was a feat. After researching/interfacing with ChatGPT, I've decided to pause developing the frontend to focus on learning how to best implement what I argue to be the most complicated piece of this project. Once this is complete, I can finish designing the frontend components and segue into the backend and business layers of this project.
<br />
<br />

### Current To-do's ###

- [ ]  Complete section of DSA course that covers tree/graph structures
- [ ]  Build out Supabase GraphQL API in sandbox in tandem
- [ ]  Come back to build out the comment data structure
