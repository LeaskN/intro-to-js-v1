/* 
  What is Routing?
    - "A path to send or recieve information" - Jessica
    - "Navigating to different parts of a web page - but not really leaving the main one - adding a slash at the end of a URL" - Shaundel

    - Routing is the logic / process that returns data given a URL path. So when you visit a URL, what your computer recieves after communicating with
    a server might be HTML, a JSON response in an API, an images etc...

  Server-Side routing
    - Traditionally, all of this routing happened on the server - when moving from page to page on a website, your browser would be requesting a new URL with
    each page change and in turn would receive a new HTML document - this is referred to as "Server-Side Routing".
      -> ie - when hitting a URL : www.nebulaacademy.com/ -> this is what you might call a home route and what gets rendered is the Home page.
      -> ie - when hitting that same URL with a different route : www.somewebsite.com/education -> this would return details about education...

  Client-Side routing
    - Introducing REACT ROUTER!!! A library / package that was made for react for client side routing.
    - When routing is handled in the browser, we navigate from page to page, but our browser does not send out new HTTP requests. Instead,
    is we are updating the URL in our browser and rendering content depending on what that URL is.

    - One major benefit of client-side routing is that you can maintain your state from "page to page (traditional muli-page website)" 
     really it's from one render to another with client-side rendering.

    - React Router is a package that allows us to change the URL, making it look like the user is visiting different pages when in reality the browser is being
    told what to render - keepiung track of what components should be rendered when you visit a URL with a route.
*/

/*
  HOW TO INSTALL / USE THE CLIENT-SIDE OF REACT ROUTER
    - In your project directory, run this command in the terminal: 
      npm i react-router-dom

  I HIGHLY RECOMMEND USING DOCUMENTATION WHENEVER YOU CAN
    - https://reactrouter.com/web/guides/quick-start

  ALT RESOURCE (provided by Jessica)
    - https://blog.logrocket.com/ react-router-dom-set-up-essential-components-parameterized-routes-505dc93642f1/#:~:text=react-router-dom%20%3A%20It,development%20environment%20using%20React%20Native

  COMPONENTS WE'LL BE USING
    - BrowserRouter, Route, Link

  What is the BrowserRouter component?
    - This component provides React-Router functionality to all the components within it's scope (it acts as the parent)
    - You need to put this at the top of your component tree so it can communicate with other React Router components

  What is the Link component?
    - This is pretty self-explanatory - we use this with RR in order to change the URL in our browser, activating your Route components which in turn renders certain UI based on the URL.

  What is a Route component?
    - From the docs: "The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route’s path."
*/