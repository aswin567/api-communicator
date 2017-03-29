# APICommunicator 
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1. Its basically an angular 2 service component. The main view of this project is to make the service call (API communication) ease way. 
 
## Development server 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
 
## Usage 
The component is in development stage. Now we can use this service component to make API post and API get calls only. The header is also fixed.  
You can download the service files and initialize in your app.module. On the time your app need to communicate using service calls use the function. 
apiPost(uri, data) - post calls 
apiGet(uri) - get calls 
 
 
uri just pass the uri of the call 
data just pass json data for post calls only 
 
On environments/environment.ts file you just add the base url for general API calls.
