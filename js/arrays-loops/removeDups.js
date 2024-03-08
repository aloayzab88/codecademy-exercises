const numbers = [1, 2, 2, 3, 2, 4, 3, 5];
const otherNumbers = [5, 3, 7, 8, 7, 5, 2];

const removeDups = array => array.filter((item, index) => array.indexOf(item) === index);
console.log(removeDups(numbers));
console.log(removeDups(otherNumbers));