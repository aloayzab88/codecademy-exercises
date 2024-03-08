const numbers = [1, -2, 3, -4, 5];

const sum = (array, includeNegative=false) => {
    return array.reduce((acc, current) => {
        if (includeNegative) {
            return acc + current;
        } else {
            if (Math.sign(current) === -1) {
                return acc;
            } else {
                return acc + current;
            }
        }
    });
};

console.log(sum(numbers));

const sum2 = (array, negative = false) => array.reduce((acc, current) => negative ? acc + current : Math.sign(current) === -1 ? acc : acc + current);

console.log(sum2(numbers));