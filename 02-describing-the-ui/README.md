# Describing the UI

This topic covers how to create, cutomize and conditionally display React components.

### First React Component

React allows to combine markup, CSS, and JavaScript into a custome, reusable UI elements called Components. Components are the building blocks of UI. They can be ordered and nested like HTML tags do.   

> "A React component is a JavaScript function that you can sprinkle with markup."   

**Component Rules**

- When defining a component, make sure its name starts with a capital letter, it won't work otherwise. It helps React differentiate between Components and HTML tags.
- The markup in the return statement should be wrapped in a parentheses. Without parentheses, lines after the 'return' keyowrd will be ignored.
- Once a component is created, it can be used multiple times in multiple places.

### Importing and Exporting Components

Reusability is one of the core functionalities of React components. This can be done by exporting a component from its file and importing it inside another file.   

There are two ways of exporting a component, **default exports** and **named exports**. The first applied by adding 'default export' key words on the component where as the second uses only 'export' key word. A file can only have one default export but no limit for named exports.

The way a component is exported defines how it must be imported. It is allowd to give any name for default exports while importing them. In the contrary, the name of named exports should much on both sides, and also, the imported name should be inside curly braces.

### Writing Markup with JSX

JSX refers to a syntax extension that allows writing HTML elements inside a JavaScript file. React allows HTML content to live with JavaScript logic inside components. The components use JSX extension to represent the markup.   

**JSX Rules**

- Return one single element. If the elements are multiple, wrap them in one parent element or an empty element called Fragment.
- Close every tag including self closing tags like <img /> instead of <img>.
- Write variables and attributes in camelCase.

### JavaScript in JSX With Curly Braces

In JSX, curly braces are used as a window to enter the JavaScript world inside JSX markup. Any JavaScript expression works inside curly braces. But these curly braces should only be used either as a content between JSX tags or as an attribute immediately after the = sign.   

When passing an object inside JSX, you should use two curly braces - one for the object the other for JavaScript.

### Passing Props to a Component

Props refers to the information passed to a JSX tag like 'className' and 'src'. In React, components use custome props to send data and communicate each other. Props are the only arguments React components accept.

It is possible to give a default value when decalring a props. But the default value is used if, and only if, the props is missing or it's undefined. it will be ignored for any other value including null.

Spread syntax (...props) can be used to forward multiple props from parent to child instead of listing each of them.

It is allowed to nest components in the same way that HTML elements are nested. In that case the parent component receive the child component in a prop called 'children'.

Props don't need to be always static. They reflect a component's data not only at the begining but also at any point in time.

> "Props are immutable. When a component needs to change its props, it will have to 'ask' its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them."

### Conditional Rendering

React components different things based on different conditions using if statement, ternary operator, and logical AND operator.

### Rendering Lists

React allows displaying multiple similar components from a collection of data using JavaScript array methods like filter() and map(). JSX elements directly inside a map() call need a 'key' - a value that uniquely identifies them in the list. Using array index as key is not recommended. Likewise, creating keys on the fly may create errors.

When each item in a list needs to render multiple JSX element, wrap them in a <div> or <Fragment> elements.

### Keeping Components Pure

React assumes every component is a pure function - a function that minds its own business and, given the same input, always returns the same output. Similarly, components should only return their own JSX without mutating any object or variable that exists before their call.

> At some point, somewhere, something has to change. That’s kind of the point of programming! These changes—updating the screen, starting an animation, changing the data—are called side effects. They’re things that happen “on the side”, not during rendering.

### Your UI as a Tree
Trees are models used to show relationship between items. React creates a UI tree to show the relationship between components. UI trees are useful to understand how data flows in a React app.

When a React app is rendered, the relationship between rendered components in a single render pass is represented in a model called render tree.

Top-level components are the nearest components to the root component, are more complex, and affect the rendering flow of their child components. Leaf components, on the other hand, are the nearest components to the bottom of the tree, has no child components, and are frequently re-rendered.

Module Dependency Tree represents the relationship between modules and the branchs of the tree represent the import statements of that module.

> When building a React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship to the client. The tool responsible for this is called a bundler, and bundlers will use the dependency tree to determine what modules should be included.

## My Understanding
- Components are a combination of JavaScript logic and HTML markup.
- Define your component once and use it any where in your app with 'export' key word.
- JSX = JavaScript + XHTML(HTML)

## What needs clarity
- What is a root component in a file?
- What is the 'conciseness of JSX'?
- Why do multiple JSX tags need to be wrapped?
- What is React's Strict Mode?

## Bullet Points
- React and JSX are two different, indepenedent things. One is a JavaScript library and the other is a syntax extension.
- Props are read-only snapshots in time: every render receives a new version of props.
- Components won’t receive 'key' as a prop. It’s only used as a hint by React itself.
