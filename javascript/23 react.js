// react.js is a library for building user interfaces. It uses a virtual DOM to efficiently update the UI when the state of the application changes. The virtual DOM is a lightweight representation of the actual DOM, and it allows React to minimize the number of updates to the real DOM, which can be slow and inefficient. When the state of a React component changes, React updates the virtual DOM and then compares it to the previous version of the virtual DOM to determine what has changed. It then updates only the parts of the real DOM that need to be updated, which can improve performance and make the application more responsive.
// node.js vs react.js

// node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to build server-side applications using JavaScript. React.js, on the other hand, is a library for building user interfaces, primarily for web applications. While both technologies use JavaScript, they serve different purposes: Node.js is used for backend development, while React.js is used for frontend development. However, they can be used together in a full-stack application, where Node.js handles the server-side logic and React.js manages the client-side user interface.

// what is component based in react.js
// Component-based architecture in React.js is a design pattern that allows developers to build user interfaces by breaking them down into smaller, reusable pieces called components. Each component is a self-contained unit that encapsulates its own logic, state, and presentation. This modular approach promotes code reusability, maintainability, and separation of concerns. Components can be nested within other components, allowing for complex UIs to be built from simple building blocks. This makes it easier to manage and update the UI as the application grows in complexity.

// what is jsx in react.js
// JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It is commonly used in React.js to define the structure and appearance of user interfaces. JSX allows developers to create React elements using a syntax that closely resembles HTML, making it easier to visualize the UI structure. Under the hood, JSX is transpiled into regular JavaScript function calls that create React elements, which can then be rendered to the DOM. This makes it easier for developers to build and maintain complex user interfaces in a more intuitive way.

// example
function Hello(){
    return(
        <div>
            <h1>Hello, World!</h1>
            <p>CSE 12</p>
        </div>

    );
}

// imprative vs declarative programming
// Imperative programming is a programming paradigm that focuses on describing how a program operates, specifying the steps and procedures to achieve a desired outcome. It involves writing code that explicitly manipulates the state of the program and controls the flow of execution. In contrast, declarative programming is a programming paradigm that focuses on describing what the program should accomplish rather than how it should be accomplished. It involves writing code that specifies the desired outcome or result, and the underlying implementation details are abstracted away. Declarative programming often leads to more concise and readable code, as it allows developers to express their intentions more clearly without getting bogged down in implementation details.

// how to run react.js code
// To run React.js code, you typically need to set up a development environment that includes Node.js and a package manager like npm or yarn. Here are the general steps to run React.js code:

// 1. Install Node.js: Download and install Node.js from the official website (https://nodejs.org/).        
// 2. Create a React application: You can use the Create React App tool to quickly set up a new React project. Open your terminal and run the following command:
//    npx create-react-app my-app
//    cd my-app
// 3. Start the development server: Once the project is set up, you can start the development server by running the following command in your terminal:
//    npm start
//    This will start the development server and open your React application in the default web browser. You can then edit the source code in the 'src' directory, and the changes will be automatically reflected in the browser.  

