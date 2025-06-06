import React from "react";

const FlattenArrayOfObjects = () => {
  const data = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      subjects: [
        {
          user: {
            name: "Devrath",
            address: {
              city: "Ghaziabad",
              zip: 201014,
            },
          },
          role: "Developer",
        },
        {
          user: {
            name: "John",
            address: {
              city: "Delhi",
              zip: 110001,
            },
          },
          role: "Designer",
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      subjects: [
        {
          user: {
            name: "Alice",
            address: {
              city: "Mumbai",
              zip: 400001,
            },
          },
          role: "Manager",
        },
        {
          user: {
            name: "Charlie",
            address: {
              city: "Bangalore",
              zip: 560001,
            },
          },
          role: "Tester",
        },
      ],
    },
  ];

  const flattenObject = (inObj, parentKey = "", resultObj = {}) => {
    for (let key in inObj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const currentObj = inObj[key];
      if (Array.isArray(currentObj)) {
        currentObj.forEach((item, index) => {
          flattenObject(item, `${newKey}[${index}]`, resultObj);
        });
      } else if (typeof currentObj == "object") {
        flattenObject(currentObj, newKey, resultObj);
      } else {
        resultObj[newKey] = currentObj;
      }
    }
    return resultObj;
  };

  const flattenData = data.map((item) => {
    return flattenObject(item);
  });
  console.log(flattenData);
  return <div>FlattenArrayOfObjects</div>;
};

export default FlattenArrayOfObjects;
