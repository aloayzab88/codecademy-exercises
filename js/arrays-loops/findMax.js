const numbers = [5, 8, 2, 14, 9];
const otherNumbers = [-3, 0, -10, 4, 7];;

const findMax = arr => {
    let maxNumber = 0;
    for (const item of arr) {
        if (item > maxNumber)
            maxNumber = item;
    }
    return maxNumber;
}

console.log(findMax(numbers));
console.log(findMax(otherNumbers));

const findMaxReduce = arr => arr.reduce((prev, next) => prev < next ? next : prev);

console.log(findMaxReduce(numbers));
console.log(findMaxReduce(otherNumbers));