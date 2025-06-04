import React from "react";

const Hooks = () => {
  const codeString = `
    Based on your **5+ years of React.js experience** with a strong focus on **UI development** and **performance optimization**, here’s how you can confidently explain **React Hooks** in interviews or technical discussions:

---

### ✅ **What are Hooks?**

> **React Hooks** are built-in functions that let you use **state** and other React features **without writing class components**.
> They were introduced in React 16.8 to simplify component logic and improve code reuse across functional components.

---

### 🧠 **How I Explain Hooks (Tailored to Your Experience)**

> In my React projects, especially while building dynamic and responsive UI components, I rely heavily on Hooks to manage state, side effects, and shared logic. Hooks have helped me write **cleaner, more modular, and testable code**—especially in large-scale applications.

---

### ⚙️ **Key Hooks with Use-Cases from Your Projects**

#### 🔹 'useState'

> For managing local component state like input fields, toggles, modals.

'''jsx
const [isOpen, setIsOpen] = useState(false);
'''

#### 🔹 'useEffect'

> I use this for **API calls**, **event listeners**, and **DOM updates**.
> Example: Fetching user profile data on component mount.

'''jsx
useEffect(() => {
  fetchUserData();
}, []);
'''

#### 🔹 'useRef'

> I’ve used 'useRef' to access DOM elements, manage focus, and **avoid unnecessary re-renders** in performance-critical parts of the UI.

'''jsx
const inputRef = useRef(null);
'''

#### 🔹 'useContext'

> For sharing **global state** like authentication or themes across components without prop drilling.

'''jsx
const user = useContext(UserContext);
'''

#### 🔹 'useMemo' & 'useCallback'

> These are crucial in optimizing render performance, especially in **data-heavy dashboards** or **component trees with expensive calculations**.

'''jsx
const filteredList = useMemo(() => filterUsers(users), [users]);
'''

---

### 🛠️ **Custom Hooks — Real-World Usage**

> I build **custom hooks** to abstract repeated logic like form validation, local storage sync, or feature flags.

Example:

'''jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
'''

> I’ve used patterns like this in production to sync theme or auth tokens with local storage without duplicating logic across components.

---

### 🔚 **Wrap-Up (One-Liner for Interviews)**

> “I use React Hooks to simplify component logic, manage side effects, and optimize performance. Hooks like 'useEffect', 'useRef', and 'useMemo' have helped me build responsive, efficient, and maintainable UIs across large-scale React projects.”

---

Would you like a comparison between **Hooks vs Class Components**, or want to explain **React Hook Form** or **custom hooks for form handling** in more depth?
`;
  return (
    <div>
      Hooks
      <pre style={{ whiteSpace: "pre-wrap" }}>{codeString}</pre>
    </div>
  );
};

export default Hooks;
