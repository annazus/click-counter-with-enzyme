# Click-counter-with-enzyme

Simple app to learn how to use enzyme and jest for testing.

## What is enzyme?

Enzyme is a tool that builds a virtual DOM for testing without a browser. It can

   * Search DOM with jQuery selectors.  
   * Simulate events like button clicks.
   * Shallow render - only render top-most component.
   * Update and test values of props and state

See (https://airbnb.io/enzyme/)

## Installation

1. Install ajv
   `npm install ajv`
2. Install enzyme, jest-enzyme, and enzyme-adapter-react-16
   `npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16`
3. Jest is a unit testing framework. Jest is already part of create-react-app. Will have to be installed separately if creating react project from scratch.
   `npm install jest`

## `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
