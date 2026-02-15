# Interactive Profile Cards

A small React project built after finishing the Quick Start section of the React documentation.

## Project Goal

This project reinforces the core fundamentals of React:

- Components
- Props
- JSX
- Conditional Rendering
- Rendering Lists
- Event Handling
- useState (State management)

## What This Project Does

- The application displays a list of user profile cards.
- Each profile card:
- Shows a user's name and role
- Toggles the user bio visibility
- Allows following/unfollowing a user
- Updates the total number of followed users
- At the top of the page, the app displays:
- Following X users

## Component Structure

profile-cards/
└── src/
  ├── App.jsx
  └── ProfileCard.jsx

**App.jsx**

- Stores the list of users
- Manages the total followed count
- Passes user data as props to ProfileCard

**ProfileCard.jsx**

- Receives user data via props
- Manages:
- isFollowing state
- showBio state
- Handles follow/unfollow toggle
- Handles bio visibility toggle

## Concepts Practiced
1. Components

Split the UI into reusable pieces (App and ProfileCard).

2. Props

Passed user data from App to ProfileCard.

3. Rendering Lists

Used map() to render multiple profile cards and assigned a unique key to each item.

4. Conditional Rendering

Used:

- Ternary operator for Follow/Following button
- Logical && for showing/hiding the bio section

5. Event Handling

Created click handlers for:

- Follow button
- Bio toggle button

6. State (useState)

Used state to:

- Track follow status per profile card
- Toggle bio visibility
- Track total followed users in the parent component