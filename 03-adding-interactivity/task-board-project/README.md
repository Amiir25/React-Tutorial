# Interactive Task Board

A simple task management app built with React to practice **state management**, **event handling**, and **derived rendering**.

This project focuses on mastering core React concepts like:
- Component-based architecture
- Lifting state
- Updating arrays immutably
- Derived state (instead of duplicated state)
- Event propagation and control
- Conditional rendering

## Features

- Add new tasks
- Toggle task completion
- Delete tasks with confirmation
- Filter tasks (All / Active / Completed)
- Dynamic task count display
- Prevent adding empty tasks

## What I Learned

1. State as a Single Source of Truth

All tasks live in the root component. Child components receive data and handlers via props.

2. Immutable State Updates
- `map()` → update tasks
- `filter()` → delete tasks
- Spread operator → create new objects/arrays

No direct mutation.

3. Derived State

Filtered tasks are calculated during rendering instead of stored in state.

4. Event Propagation

Used `stopPropagation()` to prevent unintended toggle behavior when clicking the delete button.

5. Functional State Updates

Used updater functions when updating state based on previous state.

## Project Structure
src/   
│   
├── App.jsx   
├── components/   
│   ├── Header.jsx   
│   ├── TaskInput.jsx   
│   ├── TaskList.jsx   
│   └── TaskItem.jsx

## Core State Structure
`const [tasks, setTasks] = useState([`
`  {`
`    id: 1,`
`    text: "Learn React",`
`    completed: false`
`  }`
`]);`
`const [filter, setFilter] = useState("all");`

## Tech Stack
- React
- JavaScript (ES6+)
- TailwindCSS (for styling)

## Purpose of This Project

This project was built as part of a structured React learning journey.

The goal was not just to make it work —
but to deeply understand:
- How React re-renders
- How state updates are queued
- How data flows between components
- Why immutability matters

## Possible Improvements
- Persist tasks using localStorage
- Add task editing
- Add drag-and-drop reordering
- Add animations
- Improve accessibility

## Reflection

This project was more challenging than previous ones because it required correct state architecture.

The biggest lesson:
If state ownership is wrong, everything feels complicated.

Fix the data flow — the UI becomes simple.