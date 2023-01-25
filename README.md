                                   #CRUD JWT WITH NODE
Created a Friend's list using Express server. This application allow to add a friend with the following details: 
   First name, 
   Last name, 
   Email and 
   Date of birth.
 The application is providing the ability to retrieve details, change details and delete the details.

 An application with API endpoints to perform Create, Retrieve, Update and Delete operations on the above data using an Express serve

 ## Implemented authentication at the session level using JSON Web Tokens (JWT) for authorized access.

 
 We have an Express server that has been configured to run at port 5000. When we access the server with /user we can access the endpoints defined in routes/users.js.

 ### HTTP Method to perform CRUD operations. Those operations retrieve and send data to the server

    GET is used to request data from a specified resource.

    POST is used to send data to a server for creating a resource.

    PUT is used to send data to a server to update a resource.

    DELETE is used for deleting a specified resource.

    POST AND PUT are sometimes used interchangeably.

### Some Packages to be Installed


    express - This is for creating a server to serve the API endpoints.

    nodemon - This will help to restart the server when we make any changes to the code.

    jsonwebtoken - This package helps in generating a JSON web token which we will use for authentication. A JSON web token (JWT) is a JSON object used to communicate information securely over the internet (between two parties). It can be used for information exchange and is typically used for authentication systems.

    express-session - This package will help us to maintain the authentication for the session.

### Express app uses the middleware express.json() to handle the request as a json object.
    app.use(express.json());

The express app uses routes to handle the endpoints which start with /user. This means that for all the endpoints starting with /user, the server will go and look for an endpoint handler in users.js.
    app.use("/user", routes);    