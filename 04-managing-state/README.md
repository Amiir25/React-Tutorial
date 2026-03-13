# Managing State

This topic covers how to structure a state well, how to keep a state update logic maintainable, and how to share state between distant components.

### 01. Reacting to Input with State

React doesn't use imperative UI programming, i.e dealing with individual pieces of UI separately. Instead, it uses declarative way of manipulating UI which allows declaring the different states that a component can be in and switching between them in response to user input.

Declarative way of manipulating UI has the following steps:

1. Identifying the different visual states of the component

Visualizing all the different states of the UI that might be visible for the user such as filling a form enables a submit button and submitting a form displays a loading spinner.

2. Determining what triggers those state changes

There are two types of inputs that can trigger state updates which of both need to set a state varibale to update the UI.
- Human inputs - clicking, typing
- Computer inputs - network response, image loading

3. Representing the states in memory using useState

Add enough state that represent all the possible visual states.

4. Removing any non-essential state variable

> Refactoring your state structure will make your components easier to understand, reduce duplication, and avoid unintended meanings. Your goal is to prevent the cases where the state in memory doesn’t represent any valid UI that you’d want a user to see.

5. Connecting the event handler to set state

Finally, create event handlers that updates the states.

### 02. Choosing the State Structure

A well structured state makes a component easy to modify and debug. The following are principles for structuring states:

1. **Group related states:** if multiple states are always updated at the same time, consider merging them.

2. **Avoid contradictions in state:** don't structure your states in a way that makes them contradict and disagree with each other.

3. **Avoid redundant state:** don't create a state variable to put an information you can get from a prop or another state variable.

`function Message(props) {`
  `const [color, setColor] = useState(props.messageColor);`

This code is an example of redundant state which is called mirroing a prop in a state.

> ”Mirroring” props into state only makes sense when you want to ignore all updates for a specific prop.   

Don’t put props into state unless you specifically want to prevent updates.

4. **Avoid duplication in state:** don't put the same data in multiple state variables.

5. **Avoid deeply nested state:** the more hierarchical a state is the more difficult to update.

### 03. Sharing State Between Components

If the state of two components always changes together, put the state in the closest common parent component and pass it as a prop. This is called lifting state up.

Components can be "Controlled" by their parent components or "Uncontrolled". Controlled components are driven by props where as uncontrolled components are driven by state.

> For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”.

### 04. Preserving and Resetting State

States don't live inside components. They live inside React. React associates each state with the correct component based on its position in the render tree.

React keeps the state of a component "alive" as long as the component stays in its position in the UI tree. If the component gets removed or another component replaced its position, React discards its state.

> It’s the position in the UI tree — not in the JSX markup — that matters to React

In a nested component definition, different child component is created for every render of parent component.

Switching between different components at the same position resets the state of the entire subtree.

> If you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.

By default, React preserves states of components in the same position. To override this, you can either render a component in different position or use key value to separate between components.

### 05. Extracting State Logic into a Reducer

Reducer Avoid the overwhelming of spreading multiple state updates across multiple event handlers. It is a function that handles all the state logic of a component outside the component.

Migrating from useState to useReducer has three steps:

1. Move from setting state to dispatching actions.

Event handlers specify what to do by setting state. Where as reducers specify what the user just did by dispatching actions from event handlers.

`const handleDeleteTask = (task) => {`
`    dispatch({type: 'changed', task: task});`
`}`

The object passed to 'dispatch' is called action. It should contain the minimal information about what happened.

2. Write a reducer function.

A reducer function is the palce where state logic happens. The function takes the current state and the action object as an argument and returns the next state. React will set the state to what is returned from the reducer.

`function reducerFunction(state, action)`

3. Use the reducer from your component.

Finally, the reducer function will hook up with the component by using useReducer hook inside the component. The hook takes two arguments, a reducer function and an initial state. It returns a stateful value and a dispatch function (to dispatch user action to reducer)

`const [state, dispatch] = useReducer(reducerFunction, initialState);`

### 06. Passing Data Deeply with Context

Context is an alternative of passing props. It allows parent components pass data to the entire child component in the tree without using props.

Context can be applied in three steps:

1. Create a context

`import { createContext } from 'react';`
`export const myContext = createContext(defaultValue)`

The context should be exported so that other components can access it. The only argument of createContext() is the default value.

2. Use the created context from the component that needs the data

Pass the created context to useContext() hook inside the component that needs the data. Now, instead of props, the component reads the data directly from the context.

`import { useContext } from 'react';`
`import { contextName } from './contextName.js';`

`const data = useContext(contextName);` This tells React that this component want to read the 'contextName' context.

3. Provide the context from the component that specifies the data

> Context is very tempting to use! However, this also means it’s too easy to overuse it. Just because you need to pass some props several levels deep doesn’t mean you should put that information into context.
















## Bullet Points

- The more complex your component is, the harder it is to understand what happened.
- In React, each component on the screen has fully isolated state. 
- Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.