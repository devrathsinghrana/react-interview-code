import React from "react";
import PropTypes from "prop-types";

const Proptypes = ({ name, age, isActive }) => {
  const reqStr = `
    Based on your **5+ years of React.js experience** and focus on **UI development**, here’s how you can explain **PropTypes** (note: it's not a hook) in a way that reflects your level and real-world usage.

---

### ✅ **Quick Definition**

> **PropTypes** is a type-checking utility in React that helps catch bugs by validating the types and shapes of props passed to components **at runtime**.
> It’s especially useful in **class-based or early-stage projects** or when **TypeScript is not used**.

---

### 🧠 **Interview-Level Explanation (Tailored to Your Resume)**

> In React projects that don’t use TypeScript, I use **PropTypes** to enforce strict type-checking on props to improve **code quality**, **collaboration**, and **debugging**.
> It helps avoid unexpected runtime errors in reusable UI components, especially when integrating with APIs or third-party libraries.

---

### ⚙️ **Basic Example (Professional Use Case)**

'''jsx
import PropTypes from 'prop-types';

const UserCard = ({ name, age, isActive }) => (
  <div>
    <h3>{name}</h3>
    <p>Age: {age}</p>
    <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
  </div>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
};
'''

---

### 🔍 **Why I Use PropTypes (Real Project Context)**

> In earlier projects where the team hadn’t yet adopted TypeScript, I used **PropTypes** for shared components like buttons, cards, and modals to:

* Ensure correct prop usage.
* Document component APIs for team members.
* Catch mistakes early during development or integration.

---

### 🆚 **PropTypes vs TypeScript (Based on Experience)**

| Feature       | PropTypes                 | TypeScript                      |
| ------------- | ------------------------- | ------------------------------- |
| Type checking | ✅ Runtime                 | ✅ Compile-time                  |
| IDE support   | ❌ Limited                 | ✅ Rich autocomplete, inference  |
| Enforcement   | ✅ Loose (only at runtime) | ✅ Strong & early                |
| Use case      | JS projects, simple apps  | Scalable apps, teams, long-term |

---

### 🔚 **Wrap-Up One-Liner**

> “While I now prefer TypeScript for its static typing, I’ve effectively used **PropTypes** in older codebases or when collaborating with teams not using TS—to enforce prop validation and improve code maintainability.”

---

Let me know if you want a version showing **complex shapes**, **array of objects**, or usage with **default props**.
`;
  return (
    <div>
      Proptypes
      <pre style={{ whiteSpace: "pre-wrap" }}>{reqStr}</pre>
      <div>
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Status: {isActive ? "Active" : "Inactive"}</p>
      </div>
    </div>
  );
};

Proptypes.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
};

export default Proptypes;
