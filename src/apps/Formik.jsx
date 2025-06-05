import React from "react";
import { Formik as FormikProvider, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const Formik = () => {
  const reqStr = `
    Based on your **5+ years of React.js experience** and a strong UI development background, here's how you can **explain Formik** in a way that aligns with your expertise and impresses an interviewer.

---

### ✅ **Formik Explanation (Pro-Level, Tailored to Your Resume)**

> **Formik** is a popular open-source library in React that simplifies **form state management, validation, and submission**. I’ve used it extensively in production applications to handle complex and dynamic forms with ease.

---

### 🧠 **Interview Explanation (Contextualized to Your Experience)**

> In several projects, especially where forms had dynamic fields, complex validation rules, and tight integration with design systems, I used **Formik** to:

* Manage field values and touched state.
* Implement real-time and schema-based validation (using Yup).
* Handle form submission lifecycle efficiently.

---

### 🔍 **Why I Prefer Formik**

> React’s form handling via controlled components can get messy with large forms. With Formik, I can:

* Reduce boilerplate ('onChange', 'onBlur', 'value').
* Easily handle nested fields.
* Use validation schemas (like **Yup**) for centralized and reusable validation logic.
* Improve readability and maintainability in codebases where UI and logic separation is key.

---

### ⚙️ **Code Snippet (Production-Like Example)**

'''jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

<Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={SignupSchema}
  onSubmit={(values) => {
    console.log('Submitted:', values);
  }}
>
  <Form>
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    
    <button type="submit">Submit</button>
  </Form>
</Formik>
'''

---

### 💡 **Real-World Use Case (From Your Background)**

> While working on user profile and onboarding modules, I’ve used **Formik** with conditional fields (e.g., show/hide address or OTP fields), custom validations, and dynamic field arrays (e.g., multiple contacts or skills). Combined with **Yup**, it made the code cleaner and easier to test and maintain.

---

### 🆚 Why Not Just React Forms?

> I’ve worked on raw React forms too, but as the form complexity increases (e.g., dynamic validations, custom inputs, nested structures), Formik significantly reduces bugs, boilerplate, and makes state handling more declarative.

---

Let me know if you'd like to tailor this further for a resume bullet, mock interview Q\&A, or a specific project context.
`;

  return (
    <div>
      Formik
      <pre style={{ whiteSpace: "pre-wrap" }}>{reqStr}</pre>
      <FormikProvider
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log("Submitted:", values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="email"> Email</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="password"> Password</label>
            <Field name="password" type="password" id="password" />
            <ErrorMessage name="password" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Formik;
