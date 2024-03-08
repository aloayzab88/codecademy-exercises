const words = ['manzana', 'banana', 'pera', 'uva', 'sandía'];

const findWordByLetter = (array, letter='a') => array.filter(word => word.includes(letter));

console.log(findWordByLetter(words, 'u'));