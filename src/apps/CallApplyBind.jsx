import React from "react";

const codeString = `
/*
"How did you implement call, apply, and bind in your projects?"
In my role as a React developer, I often had to ensure that functions executed in the correct context, especially when dealing with callbacks or event handlers inside reusable components. Here's how I used call, apply, and bind:

✅ bind() — Reusable Components with Event Handlers:
In one of our CV Builder components, we had dynamic forms where button handlers needed to retain the this context of the component. To prevent context loss when passing methods as props, I used bind:
  
*/

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this); // Ensures 'this' refers to the component
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return <input onChange={this.handleChange} />;
  }
}
/*
This ensured no undefined errors when accessing this.state inside the handler.

✅ call() — Utility Functions with Dynamic Context:
During development of the Employee Management System, I had a utility that formatted user data. Instead of hardcoding values, I used call to reuse the formatter function:
*/

function formatUserData(role) {
  return this.name + "-" + role;
}
const user = { name: "John Doe" };
const formatted = formatUserData.call(user, "Admin");
/*
// Output: John Doe - Admin
✅ apply() — When Working with Varying Arguments:
In a performance optimization module, I had to log analytics where the number of arguments could vary. apply helped in passing those dynamically:
*/

function logEvent(eventType, ...args) {
  console.log("Event: " + eventType, ...args);
}
const args = ["ButtonClick", { id: 1 }, "Homepage"];
logEvent.apply(null, args);
/*
Overall, I used these concepts to write more dynamic, reusable, and robust JavaScript functions, particularly in complex UI interactions and utility libraries.

✅ Used bind() to preserve component context in event handlers across reusable React components, preventing runtime errors.

✅ Leveraged call() in utility functions to dynamically set this context for formatting and transforming user data in stateful components.

✅ Implemented apply() to handle dynamic argument lists in analytics and logging utilities, improving code reusability and flexibility.

Feature	            .call()	                           .bind()
Invokes function	Yes	                               No (returns new function)
Sets this	        Yes	                               Yes
Use case	        Immediate function invocation	   Deferred/later function execution

*/
`;

class ResumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this); // Ensures 'this' refers to the component
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    console.log("this.state.name", this.state.name);
    return <input onChange={this.handleChange} value={this.state.name} />;
  }
}

const CallApplyBind = () => {
  function formatUserData(role) {
    return this.name + "-" + role;
  }
  const user = { name: "John Doe" };
  const formatted = formatUserData.call(user, "Admin");
  console.log("formatted", formatted);

  function logEvent(eventType, ...args) {
    console.log("Event: " + eventType, ...args);
  }
  const args = ["ButtonClick", { id: 1 }, "Homepage"];
  logEvent.apply(null, args);

  return (
    <div>
      CallApplyBind
      <pre>{codeString}</pre>
      <ResumeForm />
    </div>
  );
};

export default CallApplyBind;
