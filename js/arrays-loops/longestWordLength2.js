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