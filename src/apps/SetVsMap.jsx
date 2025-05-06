import React from "react";

const SetVsMap = () => {
  const codeString = `

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
