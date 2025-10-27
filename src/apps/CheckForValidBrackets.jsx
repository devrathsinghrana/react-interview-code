import React from 'react'

const CheckForValidBrackets = () => {

    const checkForValidBrackets=(inpStr)=>{
    const stack = [];
    const bracketsMapping = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    for(let char of inpStr){
        if(Object.values(bracketsMapping).includes(char)){
            // open bracket case
            stack.push(char)
        }else if(Object.keys(bracketsMapping).includes(char)){
            // close bracket case
            const openingBracket = stack.pop();
            if(openingBracket !== bracketsMapping[char])return false;
            
        }
    }
    return true
}

console.log(checkForValidBrackets("(((]}"))
console.log(checkForValidBrackets("((({[]})))"))

  return (
    <div>CheckForValidBrackets

        {`
            const checkForValidBrackets=(inpStr)=>{
    const stack = [];
    const bracketsMapping = {
        ")":"(",
        "}":"{",
        "]":"[",
    }
    for(let char of inpStr){
        if(Object.values(bracketsMapping).includes(char)){
            // open bracket case
            stack.push(char)
        }else if(Object.keys(bracketsMapping).includes(char)){
            // close bracket case
            const openingBracket = stack.pop();
            if(openingBracket !== bracketsMapping[char])return false;
            
        }
    }
    return true
}

console.log(checkForValidBrackets("(((]}"))
console.log(checkForValidBrackets("((({[]})))"))
        `}
    </div>
  )
}

export default CheckForValidBrackets