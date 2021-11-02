/*
  What is React?
    - React is a JavaScript library that we use to build user interfaces (UI) with. Libraries abstract code (details) away from the user, 
    giving us more concise methods / objects etc. to work with.
    - User Interfaces are a part of what make up the "front-end" within web applications.
    - React allows developers to create large web applications that can change data, without reloading the page. 
      The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. 
      This corresponds to the view in the MVC template.
       - Source: https://www.c-sharpcorner.com/article/what-and-why-reactjs/#:~:text=React%20allows%20developers%20to%20create,view%20in%20the%20MVC%20template
*/

/*
  History
  - Created by Jordan Walke
  - 2011: First used by Facebook.
  - 2012: Then used by Instagram.
  - 2013: React became open source -> https://github.com/facebook/react
  - 2015: Netflix picks up React...
*/

/*
  SPA (Single Page Application).

    What is a Single Page Application?
      From Wikpedia:
        A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current 
        web page with new data from the web server (or user generated data / actions), instead of the default method of a web browser loading entire new pages.

    We will be building single page applications with React.
*/

/*
  Components 
    What - (High level description)?
      Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions - code that works in isolation.
  
    What does a React component look like?

      - This is an example of a class component:

        class Car extends React.Component {
          render() {
            return <h2>Hi, I am a Car!</h2>;
          }
        }

    3 Tenets of components:
      1. Nesting - A component can be shown inside of another.
      2. Reusability - We want to make components that can be easily reused throughout an app.
      3. Configurable - We should be able to configure a component when it is created.

    5 things to keep in mind when building a component (F.I.R.S.T) - Tefe also says that this is the criteria for creating modular code in general.
        Keep it (F)ocused.
        Keep it (I)ndependent.
        Keep it (R)eusable.
        Keep it (S)mall.
        Keep it (T)estable.
          Source: https://addyosmani.com/first/
*/

/*
  What is JSX?
    - This is essentially React syntax - it's a syntax extension to JavaScript.
    - It compiles down to JavaScript and for the most part tells the browser what kind of HTML to render.

    Notes:
      - THIS IS A RULE: if you are going to return multi-line JSX, you need to wrap that JSX in parentheses 
*/

/*
  Create React App
    What is it?
      - It "bootstraps" a React environment for us...
      - From the React documentation:
        Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
      - In order to create a new CRA (create react app) Navigate to a directory you want to create a new project in (via the terminal), then use this command:
      
        npx create-react-app folderName

        Note: replace folderName with what you want your project to be called.
*/

/*
  The files in CRA
    App.js - this is CRA's default component that's being displayed
    index.html - this is kind of like any other index.html file and acts as our entry point for the browser
    index.js - this is where we first encounter the ReactDOM...
*/

/*
  ReactDOM
   Another library or "package" that works in tandem with React - it provides us DOM specific methods - methods that affect
   the DOM (we are talking about the regular DOM here...).
*/

/*
  Virtual DOM

    More on the virtual DOM:
        "In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a 
        representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, 
        but it lacks the real thing’s power to directly change what’s on the screen. 
        Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. 
        Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house."
          Source: https://www.codecademy.com/articles/react-virtual-dom

        https://www.youtube.com/watch?v=-DX3vJiqxm4
*/


/*
  Component Props:
    What are they?
      - Properties!
      - Every component has a .props
      - .props is an object
      - Can be passed down from parent to child - this is called "prop drilling"
      - They are immutable
*/

/*
  Functional vs Class Components:
    React use to be:
        - Functional Components:
            > The code looks (syntax wise) and acts like a traditional function
            > Produces JSX to show content to the user
        - Class Components:
            > The code looks (syntax wise) and acts like a traditional class
            > Can produce JSX to show
            > Can use Lifecyle Method System
            > Can use the 'state' system to update UI (User Inteface)

    React now, with the Hooks System: 
        - Functional Components:
            > Looks (syntax wise) and acts like a traditional function
            > Produces JSX to show content to the user
            > Can use Hooks to run code at specific points in time, like Lifecycle Methods
            > Can use Hooks to access the state system to update UI
    
    So which one should we use / learn?
		  - Companies with established projects are using Class-based components (older)
		  - Companies with newer projects may be using Class-based and/or Function-based components
		  - YOU NEED TO KNOW BOTH Ideally you want to learn Class Components first, THEN functional components with the hooks system
*/ 

/*
  State
    What is it?
      - Data (ie. data types) that are stored in a component and that can change over time.
      - State is similar to props, but is meant to be changed within the component itself.
      - Setting up and modifying state is not as straightforward as it is with props. It requires
      multiple methods (lifecycle methods, or hooks) that are explicitly mutating the data and then defining methods
      to define how to update our state.

    Note: Whenever you invoke this.setState() you are telling React to re-render that component.
*/

/*
  Lifecycle methods
    What are they?
      - Lifecycle methods are custom functionality that gets executed during the different phases of a component. There are methods available when the component gets created and inserted into the DOM (mounting), when the component updates, and when the component gets unmounted or removed from the DOM.
        -> From React Documentation

      - There are 3 main phases to a components lifecycle, and each phase gives us the opportunity to run code using
        the 'Lifecycle Methods' that run at certain points during those phases.
      
      - What are the 3 main phases?
        - MOUNTING
          -> constructor()
            - This where you can define your initial state object
          -> render()
          -> componentDidMount()
            - This is where you usually want to make any initial network requests 
        - UPDATING
          -> render() 
            - this runs after an update - ie. when you use setState()
          -> componentDidUpdate()
            - 
        - UNMOUNTING
          -> componentWillUnmount()
            - this is where you want clean up network requests.

        Link to lifecycle methods diagram:
        https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/