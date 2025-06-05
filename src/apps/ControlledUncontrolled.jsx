import React from "react";

const reducerFn = (state, action) => {
  if (action.type == "CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  return state;
};

const ControlledUncontrolled = () => {
  const reqStr = `
    Based on your resume—highlighting **5+ years of React.js experience** with a **strong UI development background**—you should explain **Controlled vs Uncontrolled Components** in a way that reflects both your depth of knowledge and real-world experience with form handling.

---

### ✅ **Controlled vs Uncontrolled Components — Pro-Level Explanation**

> **Controlled Component**:
> A React component whose form data is handled by the **React state**.

> **Uncontrolled Component**:
> A component where form data is handled by the **DOM itself**, typically accessed using **'ref'**.

---

### 🧠 **Interview Explanation (Tailored to Your Profile)**

> In my projects, especially while building complex UIs with dynamic forms—for example, with **Formik** or **React Hook Form**—I often choose between **controlled and uncontrolled components** based on performance and validation needs.

#### 🔹 Controlled Component (React State Driven)

> For example, in a profile settings form, where real-time validation and state syncing across fields are important, I use **controlled components**. Each input is tied to a React state using 'useState', allowing instant validation, conditional rendering, and state-driven UI updates.

'''jsx
const [name, setName] = useState("");
<input type="text" value={name} onChange={e => setName(e.target.value)} />
'''

#### 🔹 Uncontrolled Component (DOM Driven with 'ref')

> On the other hand, in performance-sensitive components like large data-entry forms or modals, I sometimes prefer **uncontrolled components** with 'useRef'. This avoids re-renders on every keystroke.

'''jsx
const inputRef = useRef(null);
<input type="text" ref={inputRef} />
'''

---

### 🛠 When I Choose What (Real-World Insight)

| Use Case                        | Controlled                   | Uncontrolled            |
| ------------------------------- | ---------------------------- | ----------------------- |
| Real-time validation            | ✅ Yes                        | ❌ Not Ideal             |
| Minimal re-renders (perf boost) | ❌ Re-renders on each change  | ✅ Avoids re-renders     |
| Integration with UI libraries   | ✅ Works well with Formik/RHF | ⚠️ Needs bridging logic |
| File uploads, simple inputs     | ⚠️ Overhead for simple tasks | ✅ Simple and performant |

---

### 💡 Bonus Tip for 5-Year Level

> "I generally use **controlled components** as the default for most forms to maintain predictable behavior and easily handle dynamic UI logic. But for optimization, especially in forms that don’t require frequent validation or need to handle native form elements (like file inputs), I use **uncontrolled components** with 'ref'."

---

Let me know if you want a one-liner, whiteboard version, or interviewer-focused storytelling format.
`;
const [inputFields, setInputFields] = React.useReducer(reducerFn, {
    username: "",
  });
  const formFields = React.useRef({
    username: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleFormFields = (e, actionType) => {
    setInputFields({
      type: actionType,
      payload: e.target.value,
    });
  };
  console.log("formFields>>>", formFields);
  console.log("inputFields>>>", inputFields);
  return (
    <div>
      ControlledUncontrolled
      <pre style={{ whiteSpace: "pre-wrap" }}>{reqStr}</pre>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            onChange={(e) => handleFormFields(e, "CHANGE_USERNAME")}
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledUncontrolled;
