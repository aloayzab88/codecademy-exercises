const words = ['gato', 'perro', 'elefante', 'jirafa', 'cocodrilo'];
const otherWords = ['manzana', 'banana', 'naranja', 'uva'];

const longestWordLength = array => {
    let longestWord = '';
    for (const item of array) {
        if (item.length > longestWord.length)
            longestWord = item
    }
    return longestWord.length;
}

console.log(longestWordLength(words));
console.log(longestWordLength(otherWords));