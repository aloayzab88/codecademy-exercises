const sumPairExist = (array, target) => {

    for (const number of array) {
        const otherPair = target - number;
        if (array.indexOf(otherPair) !== -1) 
            return true;
    }
    return false
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 7, 11, 15];
console.log(sumPairExist(array1, 9));
console.log(sumPairExist(array2, 10));