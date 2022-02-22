var isTrue = false;
var add = function (num1, num2) {
    if (!isTrue) {
        return num1 + num2;
    }
    else {
        return null;
    }
};
console.log(add(5, 10));
/**
 * object handaling in ts
 * boolean , number, string is same as js
 * but in ts every thing like function and all treated as object
 * so its handel in diffrent way
 */
var person = {
    name: "Gulam",
    age: 29
};
console.log("person", person);
