const numbers = [1, 2, 3, 4, 5, 6];
const otherNumbers = [7, 8, 9, 10, 11, 12];

const sumEven = array => {
    let sum = 0;
    for (const item of array) {
        if (item % 2 === 0)
            sum += item; 
    }
    return sum;
}

console.log(sumEven(numbers));
console.log(sumEven(otherNumbers));