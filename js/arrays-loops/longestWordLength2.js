const longestWordLength = string => {
    let longestWordCount = 0;
    const array = string.split(' ');
    for (const item of array) {
        if (item.length > longestWordCount)
            longestWordCount = item.length
    }
    return longestWordCount;
}

console.log(longestWordLength('Hola cómo estás'));
console.log(longestWordLength('La programación es divertida'));

const longestWordLengthReduce = string => {
    const longestWord = string.split(' ').reduce((prev, next) => prev.length < next.length ? next : prev);
    return longestWord.length
}

console.log(longestWordLengthReduce('Hola cómo estás'));
console.log(longestWordLengthReduce('La programación es divertida'));