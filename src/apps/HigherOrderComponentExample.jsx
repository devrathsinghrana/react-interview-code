import React from "react";

const HigherOrderComponentExample = () => {
  const reqStr = `
    Based on your **5+ years of React.js experience** and expertise in **UI development**, here’s how you can explain **Higher-Order Components (HOC)** in a way that shows both **conceptual clarity** and **real-world application**—perfect for interviews or technical discussions.

---

### ✅ **What is a Higher-Order Component (HOC)?**

> A **Higher-Order Component** is an **advanced pattern in React** where a function takes a component and returns a new component with **enhanced behavior or shared logic**.

It's like a **wrapper component** that adds features without modifying the original component’s code.

'''js
const EnhancedComponent = withFeature(OriginalComponent);
'''

---

### 🧠 **Explanation Based on Your Experience**

> In real-world projects, especially when building design systems or reusable UIs, I’ve used **HOCs** to abstract common logic like:

* Conditional rendering
* Permission checks
* Data fetching
* Layout wrappers
* Loading/error states

---

### ⚙️ **Basic Code Example (with Explanation)**

Let’s say you want to show a loading spinner while data is being fetched:

'''jsx
// HOC
function withLoader(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserListWithLoader = withLoader(UserList);
'''

> This pattern helps me **separate concerns**—the 'UserList' component just displays data, and the HOC handles the loading state.

---

### 🎯 **Where I’ve Used It (From Your Resume Context)**

> In a dashboard project, I used a **HOC to enforce role-based access control**. For example, wrapping admin-only components with a 'withAuthorization' HOC that redirects unauthorized users to a login or error page.

'''jsx
function withAuthorization(WrappedComponent, allowedRoles) {
  return function AuthComponent(props) {
    const userRole = useUserRole(); // custom hook
    if (!allowedRoles.includes(userRole)) return <Redirect to="/unauthorized" />;
    return <WrappedComponent {...props} />;
  };
}
'''

---

### 🔄 **When to Use HOC vs Other Patterns**

| Pattern          | Use When...                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| **HOC**          | You want to reuse logic across many components and preserve JSX structure |
| **Render Props** | You want more control over rendering from the child                       |
| **Hooks**        | For logic reuse inside functional components                              |
| **Context**      | For global state sharing (e.g., theme, auth)                              |

---

### 🧑‍💼 **One-Liner Summary for Interviews**

> “A **Higher-Order Component** is a function that enhances or wraps other components to reuse logic. I’ve used HOCs in real projects for things like access control, loading wrappers, and layout logic—especially when building modular, scalable UIs.”

---

Let me know if you'd like an example combining HOC with TypeScript or routing logic.
`;

  return (
    <div>
      HigherOrderComponentExample
      <pre style={{ whiteSpace: "pre-wrap" }}>{reqStr}</pre>
    </div>
  );
};

export default HigherOrderComponentExample;
