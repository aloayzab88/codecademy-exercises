const words = ['gato', 'perro', 'elefante', 'jirafa', 'cocodrilo'];
const otherWords = ['manzana', 'banana', 'naranja', 'uva'];

const longestWordLength = array => {
    let longestWord = '';
    for (const item of array) {
        //console.log('item: ' + item, 'length: ' + item.length, longestWord);
        if (item.length > longestWord.length)
            longestWord = item
    }
    return longestWord;
}

console.log(longestWordLength(words));
console.log(longestWordLength(otherWords));

const longestWordLengthReduce = array => array.reduce((prev, next) => prev.length < next.length ? next : prev);

console.log(longestWordLengthReduce(words));
console.log(longestWordLengthReduce(otherWords));
