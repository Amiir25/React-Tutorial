## 🧩 Micro Project 1: Smart Signup Form

This project forces you to:

- React to user input in real time
- Derive UI state from form state
- Use conditional rendering
- Update objects immutably
- Understand render cycles clearly
- Use batching
- Work with event handling
- See state snapshots in action

### Project Goal

- Build a small signup form with:
- Username input
- Email input
- Password input
- Confirm password input
- Submit button
- The form should react dynamically as the user types.

### Required Behavior

1. Form State (Object State Practice)

Store form data as a single object:

`const [form, setForm] = useState({`
`  username: "",`
`  email: "",`
`  password: "",`
`  confirmPassword: ""`
`});`

When input changes:

- Update only the relevant property
- Use object spread
- No mutation

2. Real-Time Validation (Reacting to Input)

Display live validation messages:

- Username must be at least 3 characters
- Email must include “@”
- Password must be at least 6 characters
- Passwords must match
- Validation must happen during render — not stored separately.
- Derived, not duplicated.

3. Dynamic UI Reactions

Based on state:

- Input border turns red if invalid
- Error message appears conditionally
- Submit button disabled unless all valid
- Show “All good!” message when valid
- Everything must be derived from form state.
- No extra boolean states like:
- 
`const [isEmailValid, setIsEmailValid] = useState(false);` ❌   

Instead:   

`const isEmailValid = form.email.includes("@");`

4. Submit Behavior

On submit:

- Prevent default
- If invalid → show global error message
- If valid → show “Form Submitted” message
- Reset form
- This will trigger multiple state updates → batching.

### How This Reinforces "Adding Interactivity"

Let’s connect it directly.

✔ Responding to Events

onChange
onSubmit
preventDefault()

✔ State as Component Memory

form object stores all inputs

✔ Render and Commit

Every keystroke → state update → re-render → DOM update
You’ll literally feel it.

✔ State as Snapshot

When typing quickly:
The handler uses snapshot values
UI reflects the new render

✔ Queuing Updates (Batching)

On submit:

setForm(...)
setSubmitted(true)

One render, not two.

✔ Updating Objects in State

You must use:

`setForm(prev => ({`
`  ...prev,`
`  [name]: value`
`}));`

✔ Updating Arrays in State (Optional Bonus)

Add:

- A “submitted users” list below the form
- Store users in an array
- Append new user on successful submit

Now you also practice array updates.


### Architectural Rule

You are NOT allowed to:
- Store validation booleans in state
- Store “isFormValid” in state
- Store derived values in state
- Everything must be calculated during render.
- This forces correct mental modeling.

### Reflection Questions After You Finish

- What triggers re-render when typing?
- Why is validation not stored in state?
- Why does disabling button not require its own state?
- What happens if you console.log(form) during typing?
- Why is updating form done with object spread?

If you can answer those smoothly,
you’ve internalized both chapters.


## 🧩 Micro Project 2: Live Searchable User Directory

This project will heavily exercise:

- reacting to input
- derived state
- filtering
- array updates
- conditional rendering
- thinking about what should vs should not be in state
- Exactly what the Managing State chapter wants you to learn.

### Project: Live User Directory

Features:

- Display a list of users
- Search users by name
- Filter users by role
- Highlight matching results
- Add a new user
- Delete a user
- 

### State You Should Store

Only store true data.

- users
- searchTerm
- selectedRole

Example:

`const [users, setUsers] = useState([`
`  { id: 1, name: "Alice", role: "Frontend" },`
`  { id: 2, name: "Bob", role: "Backend" },`
`  { id: 3, name: "Charlie", role: "Designer" }`
`])`

`const [searchTerm, setSearchTerm] = useState("")`
`const [selectedRole, setSelectedRole] = useState("All")`

### Derived State (Important)

Do NOT store filtered users in state. Instead compute it during render. This reinforces a critical React rule If something can be calculated from existing state, it should not be stored in state.

### Required Interactions

1. Search Input
`onChange={(e) => setSearchTerm(e.target.value)}`

2. Role Filter Buttons
All | Frontend | Backend | Designer

Clicking changes:

`setSelectedRole("Frontend")`

3. Add User

Simple form:

- Name
- Role
- [Add User]

Update state immutably:

`setUsers(prev => [...prev, newUser])`

4. Delete User

`setUsers(prev =>`
`  prev.filter(user => user.id !== id)`
`)`

### Concepts This Will Reinforce

From Adding Interactivity

✅ Responding to events
✅ State updates
✅ State snapshot
✅ Updating arrays
✅ Derived state
✅ Conditional rendering

From Managing State

✅ Reacting to input with state
✅ Choosing minimal state
✅ Avoiding redundant state
✅ Derived UI state

### Optional Bonus (If You Want a Challenge)

- Add highlighting of search matches.

Example:

Search al

[Al]ice

This forces you to think about render logic vs state.

### Difficulty Level

This is a perfect intermediate React exercise, harder than a form, different from task manager, teaches real state design.


## 🧩 Micro Project 5: Shopping Cart Manager

Features

Cart items:
- Apple
- Banana
- Orange

Each item has:
- name
- price
- quantity

Required Actions
- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Clear cart

Concepts This Project Reinforces

From Adding Interactivity

✔ responding to events
✔ updating arrays
✔ updating objects
✔ derived state

From Managing State

✔ reducer pattern
✔ centralized state logic
✔ predictable state transitions

## 🧩 Micro Project 6: Theme Switcher Dashboard

This project is small but demonstrates deep data passing.

The theme must be accessible everywhere.

theme = "light" | "dark"

Features

- Toggle theme
Light → Dark
Dark → Light

Deep components use theme

Example:

- Header background
- Card background
- Text color
 
Avoid prop drilling. No passing theme like Dashboard → Header → Toggle. Instead use Context.

## 🧩 Micro Project 7: Global Todo Manager

The goal is to remove prop drilling and centralize logic.

Key idea:

- Reducer manages state
- Context provides it globally
- Components dispatch actions

Actions

Your reducer should support:
- Add Todo
- Toggle Todo
- Delete Todo
- Clear Completed

Important Rules

While building this project:

Rule 1 - Do not pass todos as props. Always use `useContext`.
Rule 2 - All state updates must go through `dispatch()`. Never mutate state.
Rule 3 - Derived values should not be stored in state. Compute during render.

What This Project Teaches

This project combines three big ideas:
1. Centralized state logic - Reducer.
2. Global state access - Context.
3. Clean component architecture. Components only describe UI.

Bonus Challenge (Optional)- Add filter buttons:
- All | Active | Completed

But remember, filter is state - filteredTodos is derived
