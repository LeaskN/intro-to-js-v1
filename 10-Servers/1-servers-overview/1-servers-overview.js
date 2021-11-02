/* 
  What is a web-server?
    It's just a computer that is listening for requests from the client (user computer) and then serving (delivering) 
    information to the client.
  
  Client-server model
    It's the relationship between the client and the server - again, client being your computer, the server being on the
    other end. 

    - HTTP is a set of rules (and a format) for data being transferred on the web. HyperText Transfer Protocol. It's
      a format (of various) defining data being transferred via TCP/IP.

    - TCP/IP is another set of rules two sides agree on (client / server) when communicating. This defines the rules for 
    actually sending the information.

  So, how are we going to create a web-server?
    We are going to use Express.js, which is a Node.js library.

  How to create an Express server
    Create directory - we'll call ours api
    In your directory create a file called index.js
    In your directory, via the terminal, run the command: npm init
    In your directory, run: npm install pg express
      - This is installing two dependencies to our project - node-postgres & Express.js
      - node-postgres is going to allow us to communicate with our SQL database.
      - Express.js: "is a back end web application framework (library) for Node.js".
    In your directory, run: npm install cors
      - cors is a "package (module) for providing a express middleware that can be used to enable CORS..."
      - Cross-origin resource sharing (cors) is "a mechanism that allows restricted resources on a web page to be requested from
        another domain outside the domain from which the first resource was serverd" - WIKIPEDIA
      - Essentially, we need this module (package, code etc.) in order to turn off / modify the default security in place between
        two seperate computers that are trying to talk to each other over the web.
    
  Installing nodemon
    - In your directory, run: npm i -g nodemon
    - using the -g flag you'll allow yourself the luxury of using nodemon on any future node project.
    - nodemon allows for 'hot reloading' of our sever code.

  RESTful API
    - Representational state transfer
    - Essentially, it's an architectural style of building an API.
*/

/*
  Misc.
    To shutdown a server running in a Terminal you can press: control c
*/