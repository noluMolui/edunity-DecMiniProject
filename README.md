# React + Vite
GRADED ASSIGNMENT Read and write a summary of the following. submit by Thursday https://jscomplete.com/learn/complete-intro-react https://www.freecodecamp.org/news/react-hooks-cheatsheet/ https://www.w3schools.com/js/js_htmldom_document.asp https://www.w3schools.com/js/js_htmldom_elements.asp

Summary: Understanding React, Hooks, and the DOM

From reading the provided resources, I learned that React is a JavaScript library used to build user interfaces, especially for web applications that need to update and change often. React is called a library and not a framework because it focuses mainly on the UI part of an application and does not force developers to use a specific structure or set of tools. This makes React flexible and easy to combine with other technologies.

React is built around the idea of components. Components are reusable pieces of the user interface written as JavaScript functions. Each component returns JSX, which looks like HTML but is actually JavaScript. This makes it easier to describe what the UI should look like instead of manually creating and updating HTML elements. Components can also receive props, which allow data to be passed from one component to another.

One of the most important ideas in React is that it is declarative. Instead of telling the browser step by step how to change the page, the developer describes the final state of the UI. When the data changes, React automatically updates the UI. This is different from using plain JavaScript with the DOM, where developers must manually select elements using methods like document.getElementById() and then change their content or style.

React uses Hooks to add functionality to functional components. The useState hook allows a component to store and update data, while useEffect allows code to run when the component renders or when data changes. Hooks make it possible to manage state and side effects without using class components, which makes the code simpler and easier to understand.

Learning about the DOM (Document Object Model) helped me understand why React is useful. The DOM represents the structure of a web page, and JavaScript can be used to manipulate it directly. However, manually working with the DOM can become complicated and repetitive in larger applications. React solves this by handling DOM updates efficiently behind the scenes, allowing developers to focus on logic and UI outcomes instead of low-level DOM manipulation.

Overall, these resources helped me understand that React changes how developers build web interfaces. Instead of controlling the DOM directly, React allows developers to describe the UI based on data and state. This makes applications more organized, easier to maintain, and better suited for dynamic user experiences.
