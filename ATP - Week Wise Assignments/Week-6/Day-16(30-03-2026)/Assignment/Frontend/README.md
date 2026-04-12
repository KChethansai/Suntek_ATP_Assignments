# State Management

-Sharing state + keeping state sync across app
-Context API -->Small apps
-Redux/Zustand -->Large apps

# Context API

-Create context object(pipeline)
-Add state

# Issues with Context

-Context with the useState Hook is a best and simple state management mechanism for small applications.But,it creates unneccassary rerendering issues when multiple states is a part of the context.
-To overcome this unneccassary rerendering issue,create multiple contexts and make sure each context have a single state.
-When the application size is huge ,then maintainence of multiple contexts will become an issue.FOr such large applications advanced state managemnet tools like reduc or zustand can be used

# Advanced State Management with ZUSTAND
