//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const otherNumbers = [10, 15, 20, 25, 30];

const sumDivisibleBy3or5 = array => {
    let sum = 0;
    for (const number of array) {
        if (number%3 === 0 || number%5 === 0)
            sum+= number;
    }
    return sum;
}

//console.log(sumDivisibleBy3or5(numbers));
console.log(sumDivisibleBy3or5(otherNumbers));