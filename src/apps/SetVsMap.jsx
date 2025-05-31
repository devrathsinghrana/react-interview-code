import React from "react";

const SetVsMap = () => {
  const codeString = `

  //Great! Let’s take the CV Builder Website example from your 
  // resume and walk through a scenario where using a Map 
  // is more effective than a plain object.
/*  🧩 Scenario: Managing Multi-Step Form (CV Sections)
In a CV builder, users typically go through multiple steps like:

Personal Information

Education

Experience

Skills

Preview

You want to map step numbers to section data or UI components and ensure:

Order is preserved

Step numbers (numbers) are the keys

Easy iteration and dynamic step updates
*/

const stepss = {
  1: "Personal Information",
  2: "Education",
  3: "Experience",
  4: "Skills",
  5: "Preview"
};

for (const step in stepss) {
  console.log(step+":"+stepss[step]);
}

/*
Not ideal — keys are auto-converted to strings, and iteration with for...in can pull in 
prototype keys if you're not careful.
*/

// Adding a method to Object.prototype (simulating external code or a library side effect)
Object.prototype.extrapropertyy = "I'm inherited";

const stepsss = {
  1: "Personal Info",
  2: "Education",
  3: "Experience"
};

// Iterate using for...in
for (const key in stepsss) {
  console.log(key+":" +stepsss[key]);
}

//✅ Using Map (Recommended):
const steps = new Map([
  [1, "Personal Information"],
  [2, "Education"],
  [3, "Experience"],
  [4, "Skills"],
  [5, "Preview"]
]);

// Iterate with order preserved
steps.forEach((label, stepNumber) => {
  console.log("Step" +stepNumber+":" +label);
});

//💡 Bonus: Dynamically Update Steps
// Add a new step
steps.set(6, "References");

// Remove a step
steps.delete(4); // Removes "Skills"

// Check if a step exists
if (steps.has(3)) {
  console.log("Experience step is present");
}
//🧪 In React – Tracking Form Components
const stepComponents = new Map([
  [1, "<PersonalInfo />"],
  [2, "<Education />"],
  [3, "<Experience />"],
  [4, "<Skills />"],
  [5, "<Preview />"],
]);

function RenderStep({ currentStep }) {
  return stepComponents.get(currentStep) || "<NotFound />";
}

/*
🎯 Why Map is better here:
Feature	                   Object	                         Map
Maintains insertion order	 ❌ Inconsistent	               ✅ Yes
Non-string keys	           ❌ Converted to string	       ✅ Real numbers
Easy to iterate	           ❌ Extra steps	               ✅ Built-in methods
Dynamic add/delete	       ✅, but clunky	               ✅ Smooth
*/


  // identify duplicate and unique email id and the count of duplicates using set and map

  const users = [
    { id: 1, email: "user1@example.com" },
    { id: 2, email: "user2@example.com" },
    { id: 3, email: "user1@example.com" },
    { id: 4, email: "user3@example.com" },
    { id: 5, email: "user2@example.com" },
    { id: 6, email: "user2@example.com" },
  ];

  const emailCounts = new Map();

  for (const user of users) {
    const email = user.email;
    emailCounts.set(email, (emailCounts.get(email) || 0) + 1);
  }

  // Filter duplicates
  const duplicates = [...emailCounts.entries()].filter(
    ([email, count]) => count > 1
  );

  console.log(duplicates);
  // Output: [['user1@example.com', 2], ['user2@example.com', 3]]

  // Make search history feature maintaining last 5 unique search queries using SET
  const selectedSkills = new Set();
  selectedSkills.add("React");
  selectedSkills.add("JavaScript");
  selectedSkills.add("React"); // won't be added again

  console.log([...selectedSkills]);

  const searchHistory = new Set();

  function addSearchQuery(query) {
    searchHistory.add(query);
    if (searchHistory.size > 5) {
      searchHistory.delete([...searchHistory][0]); // limit to 5
    }
  }

  addSearchQuery("React");
  addSearchQuery("Js");
  addSearchQuery("c++");
  addSearchQuery("java");
  addSearchQuery("mysql");
  addSearchQuery("hindo");
  addSearchQuery("java");
  console.log([...searchHistory]);

  // cacheing api calls using SET so that duplicate api calls are not registered.
  const fetchedURLs = new Set();

  function fetchData(url) {
    if (fetchedURLs.has(url)) return;
    fetchedURLs.add(url);
    // fetch logic here
  }

  // Field Mapping for CV Builder using MAP
  const formData = new Map();
  formData.set("fullName", "John Doe");
  formData.set("email", "john@example.com");

  console.log(formData.get("email"));

  // Localized Labels or Translations
  const labels = new Map([
    ["en", "Submit"],
    ["fr", "Soumettre"],
    ["de", "Einreichen"],
  ]);

  const currentLabel = labels.get("en");

  //   Component Configuration by Type using MAP

  const componentMap = new Map([
    ["text", "TextInputComponent"],
    ["select", "DropdownComponent"],
    ["date", "DatePickerComponent"],
  ]);

  const ComponentToRender = componentMap.get("select");

  console.log(ComponentToRender);

  const user1 = { id: 1, name: "Alice" };
  const user2 = { id: 2, name: "Bob" };
  const user3 = { id: 1, name: "Alice" }; // different reference, same content as user1

  const actions = [
    user1,
    user2,
    user1,
    user3,
    user2,
    user2,
  ];

  const mapCounts = new Map();

  for (const user of actions) {
    mapCounts.set(user, (mapCounts.get(user) || 0) + 1);
  }

  for (const [user, count] of mapCounts.entries()) {
    console.log(user.name + " (id: " + user.id + " ) => " + count);
  }
  `;
  new Function(codeString)();

  return (
    <div>
      SetVsMap
      <pre>{codeString}</pre>
    </div>
  );
};

export default SetVsMap;
