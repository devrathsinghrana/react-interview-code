import React from "react";

const FlattenArr = () => {
  const arr3D = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];
  const flattenArr = (inArray, resArr = []) => {
    for (let val of inArray) {
      if (Array.isArray(val)) {
        flattenArr(val, resArr);
      } else {
        resArr.push(val);
      }
    }
    return resArr;
  };

  console.log(flattenArr(arr3D));
  return <div>FlattenArr</div>;
};

export default FlattenArr;
