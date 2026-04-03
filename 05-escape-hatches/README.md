# Escape Hatches

This topic covers how to step outside react and connect to external systems.

### Referencing Values with Refs

Refs are used to store information in a component that don't trigger a new render. A ref can be created by calling the useRef hook and passing it the initial value we want to reference.

useRef returns an object. The object has a single property called "current" whose value is the initial reference passed to useRef.

Like state, refs are retained by react between renders. However, setting a state triggers a re-render where as setting a ref dosn't.

> If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.

### Manipulating the DOM with Refs

Refs are also used to access the DOM elements managed by Ract such as focusing on a node, scrolling to it, or measuring its size and position.

To access a DOM node managed by react:

1. import the useRef hook from React
`import { useRef } from react;`

2. declare a ref using the hook
`const myRef = useRef(null);`

3. Pass the ref as the ref attribute to the JSX tag for which you want to get the DOM node
`<div ref={myRef}>`

When React creates a DOM node for this <div>, it will put a reference to this node into `myRef.current`. You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.
`myRef.current.scrollIntoView();`

### Synchronising with Effects

Effects are used to specify side effects. Rather than by a particular event, side effects are caused by rendering it self. Every time your component renders, React will update the screen and then run the code inside useEffect.

> Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear.

The three steps to write an effect

1. Declaring an Effect by importing the useEffect hook from react and calling it at the top of the component with some code inside it.
`useEffect(() => { ... })`

2. Specifying the effect dependecies to tell React to skip unnecessarily re-running the Effect by specifying an array of dependencies as the second argument to the useEffect call.
`useEffect(() => { ... }, [])`

The dependency array can contain multiple dependencies. React will only skip re-running the Effect if all of the dependencies have exactly the same values as they had during the previous render.

> Notice that you can’t “choose” your dependencies. You will get a lint error if the dependencies you specified don’t match what React expects based on the code inside your Effect.

3. Add clean up if needed