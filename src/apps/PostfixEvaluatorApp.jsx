import React from "react";

const PostfixEvaluatorApp = () => {
  const codeString = `

  function evaluatePostfix(expression) {
    const stack = [];

    for (let token of expression) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        let b = stack.pop();
        let a = stack.pop();

        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
          default:
            throw new Error("Invalid operator: " + token);
        }
      }
    }

    return stack.pop();
  }

  // Example usage:
  const expression = ["2", "1", "+", "3", "*"]; // Equivalent to (2 + 1) * 3
  console.log(evaluatePostfix(expression)); // Output: 9

  const expression2 = ["4", "13", "5", "/", "+"]; // Equivalent to 4 + (13 / 5)
  console.log(evaluatePostfix(expression2)); // Output: 6.6

  `;
  new Function(codeString)();

  return (
    <div>
      PostfixEvaluatorApp
      <pre>{codeString}</pre>
    </div>
  );
};

export default PostfixEvaluatorApp;
