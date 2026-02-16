# React Quick Start
A quick start on React tutorial from React documentation

## Concepts Learned
The following concepts are covered in this topic:

### **Components**
React is made up of components. Instead of writing one big HTML page, React allows to split the UI into small, reusable functions that return JSX. Each component can manage its own logic and apearance. Adding 'export default' keywords on a component makes it main component in the file.
### **JSX**
JSX is a markup syntax that allows writing HTML markup inside JavaScript functions. Despite HTML, it strickts closing every element including self closing tags like <img />. Rules in JSX include:
- Returning multiple JSX tags is not allowed unless they're wrapped in a parent or an empty element (<>...</>) called Fragment
- Curly braces are used to write JavaScript code inside markup
- HTML's "class" atrribute is replaced by "className" in JSX
### **Conditional Rendering**
In addition to if statement, the turnary (?...:) and logical && operators can be used to apply conditional rendering in REACT. Unlike if statement, the turnary operator and the logical && work inside JSX i.e inside markup using {}
### **Rendering Lists**
JavaScript's 'for' loop and 'map()' method are used to render lists in REACT. The 'key' attribute is used to pass a value that helps REACT uniquely identify each item in the list
### **Event Handling**
Events are actions triggered by user interactions. Events can be handled by creating an event handler function in side a component. To call the event handler function, pass it down to 'onClick' function and React will take care of calling it.
### **State**
State is a data stored inside a component whose change affects the UI. A state can be updated by delaring state varibales using 'useState' hook. The hook returns an array of a variable to store the current state and a function to update the state which both can have any kind of names. React re-renders the component for every state update and if a component is rendered multiple times, each will have its own state.
### **Hooks**
Hooks are functions that have 'use' prefix.They can only be called at the top of a component. There are multiple built-in hooks provided by React.

## My Understanding
React is basically a way to break the UI into small JavaScript functions called components.
Each component returns a JSX.
States allow components to remember things between renders.
When a state changes, React re-renders the component.

## What needs clarity
- Why hooks need to be called at the top of a component?
- Why each list item needs a key?
- Why React re-renders a component when a state changes?

## Bullet Point
State changes **→** Component re-renders **→** React compares the new UI with the old one **→** Only necessary changes are applied to the DOM.