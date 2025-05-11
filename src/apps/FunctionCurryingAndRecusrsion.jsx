import React from "react";

const FunctionCurryingAndRecusrsion = () => {
  const codeString = `
  /*
    Function currying

    "While working on reusable components for the CV Builder platform, I implemented function currying in utility functions to improve modularity and reusability. For example, in form validations or dynamic style generators, I used curried functions to pass partial arguments and return specialized versions for specific contexts. This helped reduce code repetition and allowed me to compose functions more cleanly, especially in dynamic form handling scenarios."


    */
  const applyStyle = (property) => (value) => ({ [property]: value });

  // Usage:
  const setMargin = applyStyle("margin");
  const margin10 = setMargin("10px"); // { margin: '10px' }
  console.log("margin10>>>", margin10);

  /*
    Recursion

    "In the Employee Management System, I used recursion to render deeply nested employee hierarchies (such as organizational trees) and handle dynamic menu generation. Recursion helped me traverse and render these structures cleanly without hardcoding depth levels. It was especially useful for generating nested components based on tree-like JSON data."
    */
  const renderTree = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id}>
        {node.name}
        {node.children && (
          <div className="ml-4">{renderTree(node.children)}</div>
        )}
      </div>
    ));
  };

  /*
  Reusable Component Development → Function currying for modular utilities.

Performance Optimization / Optimization → Currying for efficiency and clarity in functional utilities.

Complex UI Components from Figma → Recursion to render nested UI structures dynamically.
  */

  const treeData = [
    {
      id: 1,
      name: "CEO",
      children: [
        {
          id: 2,
          name: "CTO",
          children: [
            {
              id: 3,
              name: "Dev Manager",
              children: [
                { id: 4, name: "Frontend Developer" },
                { id: 5, name: "Backend Developer" },
              ],
            },
          ],
        },
        {
          id: 6,
          name: "CFO",
          children: [{ id: 7, name: "Accountant" }],
        },
      ],
    },
  ];

  | Feature                          | Regular Function                         | Curried Function                      |
| -------------------------------- | ---------------------------------------- | ------------------------------------- |
| Reusability                      | ❌ Must pass both args every time         | ✅ Can pre-fill one argument           |
| Composability                    | ❌ Harder to compose with other functions | ✅ Works well in composition pipelines |
| Cleaner for config-based systems | ❌ Verbose                                | ✅ Elegant and DRY                     |
| Declarative style                | ❌ Less modular                           | ✅ More expressive                     |


📌 Real-World Frontend Use Case in Your Projects:
In your CV Builder or E-Commerce projects, you might’ve used currying in:

Style factories (theme-based design)

Validation rules (e.g. minLength(5)(input))

HOC or config-based renderers (withLogging(level)(Component))

🔁 So, Why Not Just Use Simple Arguments?
Because currying gives you:

More control

Reusability

Cleaner functional patterns

Even though it seems more complex at first, it scales better in systems with repeated configurations or transformations.

  `;

  const applyStyle = (property) => (value) => ({ [property]: value });

  // Usage:
  const setMargin = applyStyle("margin");
  const margin10 = setMargin("10px"); // { margin: '10px' }
  console.log("margin10>>>", margin10);

  const treeData = [
    {
      id: 1,
      name: "CEO",
      children: [
        {
          id: 2,
          name: "CTO",
          children: [
            {
              id: 3,
              name: "Dev Manager",
              children: [
                { id: 4, name: "Frontend Developer" },
                { id: 5, name: "Backend Developer" },
              ],
            },
          ],
        },
        {
          id: 6,
          name: "CFO",
          children: [{ id: 7, name: "Accountant" }],
        },
      ],
    },
  ];
  const renderTree = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id}>
        {node.name}
        {node.children && (
          <div className="ml-4">{renderTree(node.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <div>
      FunctionCurryingAndRecusrsion
      <pre>{codeString}</pre>
      {renderTree(treeData)}
    </div>
  );
};

export default FunctionCurryingAndRecusrsion;
