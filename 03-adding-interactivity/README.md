# Adding Interactivity

This topic covers how to write components that handle interactions, update their 
state, and display different output over time.

### Responding to Events

Event handlers are custome functions that can be triggered in response to user interactions such as clicking a button and filling a form. To create an event handler, simply create a function with a logic and pass it to the approprate JSX tag as a prop. It can also be defined inline in the JSX as normal or arrow function.

Don't call event handlers on events like `onClick{handleClick()}` (with parethesis). Instead, pass them to the events - `onClick{handleClick}`. Otherwise, the event handler will run on rendering instead of on inetaction. Because all JavaScript logic inside JSX executes on component rendering.

Event handlers can be passed as a prop. The parent component defines the function while the child component contains the event.

> Built-in components like <button> and <div> only support browser event names like onClick. However, when you’re building your own components, you can name their event handler props any way that you like. By convention, event handler props should start with 'on', followed by a capital letter. For example, the Button component’s onClick prop could have been called 'onSmash'. Naming props after app-specific interactions like 'onPlayMovie' gives you the flexibility to change how they’re used later.

Event handlers also catch events of child components. The event propagates-up to the UI tree starting from the component where the event occured. All events propagate except 'onScroll' event.

The only argument that event handlers recieve is an event object which usually represented by 'e'. This argument gives information about the event and, also, allow to prevent an event reach parent component (to stop event propagation) by calling `e.stopPropagation()`.

calling `e.preventDefault()` allows to prevent the default behavior of some browser events such as <forms>'s page realoding behaviour on submit.

### State: A Components Memory

State is a 'memory' where a component stores the current value(data) of a certain event. This can be done by:
1. Retaining the data between renders
2. Triggering React for re-rendering when the data is changed.

Regular variables are not enough for this because their change don't trigger component re-render and React doesn't consider their change between renders.

**Hooks are special functions starting with 'use' and available only when React is Rendering. They can only be called at the top level of a component, not iside functions, loops, or conditions**

State variables are declared using the `useState` hook. It provides a state variable and a state setter function. The state variable is used to store the data so that it retains between renders. The setter function allows upadating the state variable and triggering component re-render.

Calling `useState` hook tells React that this component is going to store and remember some data. The hook returns an array of a state variable and a setter function which can be accessed using array destructuring. Its only argument is the initial value of the state variable.

State is fully private to the component declaring it. Even parent components have no access to the states of their child components. Furthermore, if a component is rendered twice, each will have isolated state. Changing the state the one won't affect the other one's.

> You can have more than one state variable. Internally, React matches them up by their order.

**State should only store the source of truth, not calculated values.**

### Render and Commit

Displaying a component on a screen passes three steps:

1. Trigerring a render - This can be either intial render or a state update. The initial render is done by calling `createRoot` with its `render` method on the target DOM node.

> Updating your component’s state automatically queues a render. (You can imagine these as a restaurant guest ordering tea, dessert, and all sorts of things after putting in their first order, depending on the state of their thirst or hunger.)

2. Rendering - React's call for a component to decide what to display after a state update. But if it is initial render, React calls the root component.

> Rendering is a recursive process. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

3. Commiting - Modifying the DOM. For initial render, React displays all the DOM nodes on the screen using `appendChild()`. For re-render, It only changes the nodes that show difference between renders.

After these steps, the browser repaints the screen which is called browser rendering.

### State as a Snapshot

Setting a state (calling a state setter function) doesn't chage the state variable. Instead, it triggers a re-render. The process is as follows:
- The event handler function executes
- The state setter function updates the state and queues a new render
- React re-renders the component according to the state value

During rendering, React calls the component. Before calling it, React prepares the current state snapshot and provides it to the component. The component uses that state snapshot and returns JSX, which is a snapshot of the UI at that moment. React then compares this JSX with the previous one and updates the necessary parts of the DOM.

### Queueing a Series of State Updates

React starts processing state updates only after all the code of event handler function is executed. This process is called Batching.

Batching allows updating muliple state variables without triggerring multiple re-renders.

> If you would like to update the same state variable multiple times before the next render, instead of passing the next state value like `setNumber(number + 1)`, you can pass a function that calculates the next state based on the previous one in the queue using updater function `setNumber(n => n + 1)`.

### Updating Obects in State

If a state has object value, it should be changed by creating a new object, which is a copy of the existing one, and setting the state to use that copy.

Although JavaScript objects are mutable, they should always be treated as immutable (read-only) like primitive values such as number and string, i.e they should always be replaced by a new value.

> Code like this is a problem because it modifies an existing object in state:
`position.x = e.clientX;`
`position.y = e.clientY;`

>But code like this is absolutely fine because you’re mutating a fresh object you have just created:
`setPosition({`
  `x: e.clientX,`
  `y: e.clientY`
`});`

> Mutation is only a problem when you change existing objects that are already in state. Mutating an object you’ve just created is okay because no other code references it yet. Changing it isn’t going to accidentally impact something that depends on it. This is called a “local mutation”. You can even do local mutation while rendering. Very convenient and completely okay!

The spread operator(...state) is used to include the existing value of the state in the update object.

For deeply nested states, there is Immer, a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you.

### Updating Arrays in State

In JavaScript, array is just another kind of objects. A state with array value should be treated as read-only. Instead of using methods like `push()` and `pop()` that mutate an array, use non-mutating methods like `filter()` and `map()` to update it.

- To add to an array use spread operator(...state)
- To delete from an array use `filter()` method
- To transform (change items of) an array use `map()` method
- To replace items of an array use `map()` method
- To insert an item at a particular position use `slice()` method together with spread operator.
- To apply changes that can only be done using mutating methods, copy the array first and apply the change on it, then assing it to the state.

## My Understanding
- State is data that determines what a component renders and can change over time.

## What needs clarity?
- Why is that onScroll event doesn't propagate?
- What is event propagation used for in a React app?

## Bullet Points
- Event handlers are the best places for side effect
- Hooks allow you to hook-into React featrues like state
- State actually “lives” in React itself, as if on a shelf!, outside of the function.
- Nested objects are not actually nested. Instead, they are separate objects “pointing” at each other with properties.
- Data flows downward, Events flow upward