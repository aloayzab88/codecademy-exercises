const string = 'cloud strife';

const capitalizeWords = string => {
  let array = string.split(' ');
  array = array.map(word => word.replace(word[0], word[0].toUpperCase()));
  return array.join(' ');
}

console.log(capitalizeWords(string));