const sumDoublePairs = array => {
    return result = array.filter(number => number % 2 === 0)
                         .map(number => number * 2)
                         .reduce((acc, current) => acc + current);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const otherNumbers = [3, 5, 7, 9, 10, 12, 14];
console.log(sumDoublePairs(numbers));
console.log(sumDoublePairs(otherNumbers));