# Reflections Journal Project - Phase 2 (React refactoring)
> Please jump to the bottom of this README file for general information and project guidelines

## Phase 2: Design and Layout, Refactor Reflection Objects
For Phase 2 of this project you will develop the following:
- Build an HTML form for entering Reflections into your journal in React
- Implement the JavaScript necessary to process and validate the submitted form data in React
- Use React components to create Reflection object instances and display them in the browser
- NOTE: For this phase, Reflection Journal entries will not be persisted to a database or backend web service at this point (this functionality will be added later) but you will create journal object instances, and render them in the browser using React components

### Requirements:
1. A React component with a HTML form for entering reflections consisting of the following items:
  - Creation Date - Input element using a `date` field
  - Journal Entry - Input element for entering the text for your reflection using a `textarea` field
    - Enter in as much text as necessary about what you learned, how you felt, and plans for the upcoming days
  - Confidence Level - Input element using a `select` field with the `options` of `Low`, `Medium`, and `High` 
    - Describe your confidence level in your skills at the time of posting
  - Post Reflection - A `button` to post/record your journal entry
2. Define a JavaScript object that will represent a journal entry and store in the state of parent component
3. Implement the JavaScript to handle the form submisson in your React component
4. When a journal entry is submitted, create a new `journalEntry` object and add it to a `journalEntries` array in parent state that gets passed down to a child component for display

#### Example:
```js
const journalEntries = [
    {
        creation_date: "03/04/2020",
        journal_entry: "We learned about 4 different higher order array methods today. forEach made sense, 
        but the others were way confusing.",
        confidence_level: "Medium"
    },
    etc...
]
```
5. Allow the user to continue to submit entries as long as they choose
  - After each submisson
    - Add the entry to the `journalEntries` array by lifting new entry to parent's state
    - Use a child component that you implement to iterate the list of entries passed down from parent component, and using template literals, render all of the entries in the DOM

6. You must use CSS grid to layout your entries web page
  - We will start out with a basic display that we will refine in future project phases
  
## General Project Information:
The Reflections Journal project will leverage the development concepts you learn in class and apply them to build a Reflections Journal full-stack web application over a series of phases.

Each phase will include development in the appropriate technology to meet all requirements and each Student will be required to present their project to the class. The length of time required for the presentation will vary across the different project phases, but in general will be 10 - 20 minutes as project complexity increases.

### Guidelines:
- This is an *individual* project and Students should perform all work independently
- You can use your past notes and online sources as necessary, but first try to implement the solution based on your current knowledge noting any areas where you get stuck so you can go back and review those concepts
- Instructors will assist Students, however it is up to the individual Student to come up with the answers
> IMPORTANT: Should you not complete the work required for a given phase during the alotted time, it is *critical* that you use whatever additional time is required outside of class to meet all requirements as subsequent projects will build upon the foundation laid by the ones prior!

