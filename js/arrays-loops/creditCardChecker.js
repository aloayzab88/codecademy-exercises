// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [1, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// 3. Function to validate a credit card
const validateCred = card => {
    // We don't have to mutate the original array, this will store a copy
    let copyCard = [];

    // If card is an array copy the card with spread operator, it easier that use forEach and push 😁
    // 7.2 If card is a string or numbers change it to string, split it to an array and change every item to a number with the + operator
    Array.isArray(card) ? copyCard = [...card] : copyCard = card.toString().split('').map(element => +element);

    // If there was a letter in the string that will return NaN on the previous .map()
    if (copyCard.includes(NaN)) {
        return `Please, enter only numbers.`
    }

    // 3.1 Reverse in place copyCard to iterate to the right, like any sane person will do 😋
    copyCard.reverse();

    // 3.2 If element place is even duplicate it, if the result is greater than 9 substract 9
    // You could use if else statements but I find ternay operators easier to use
    // copyCard = copyCard.map((element, index) => !(++index % 2) ? element*2 > 9 ? element*2 - 9 : element*2 : element);
    // Or you can use if else to undertand it better
    /*
        i = index, p = placement
        i   p   %2
        0   1   0   --> even index, odd placement
        1   2   1   --> odd index, even placement
        2   3   0   --> even index, odd placement
        3   4   1   --> odd index, even placement
        ...
    */
    copyCard = copyCard.map((element, index) => {
        if (index % 2) {
            element*= 2;
            if (element > 9) {
                return element-= 9;
            } else {
                return element;
            }
        } else {
            return element;
        }
    });
    // 3.3 Sum using reduce is easier than reasigning a variable like sum+= element using a forEach
    const sum = copyCard.reduce((acc, current) => acc + current);
    // 3.4 Evalute to true or false
    return sum % 10 === 0;
}

// 4. Using validateCred to filter invalid cards, notice the ! to negate the evaluation, otherwise we will be filtering the valid cards!
const findInvalidCards = array => array.filter(card => !validateCred(card));

// Helper function to remove duplicates, indexOf returns the index of the first occurrence of the current element
// If that index is not the same as the index of the current element there was a occurrence previouly, so the current element is a duplicate
const removeDups = array => array.filter((element, index) => array.indexOf(element) === index);

const idInvalidCardCompanies = cards => {
    // Check if cards is a single array. If true transform cards in a nested arrays. Otherwise function won't wonk bacause it expect an array of arrays
    if (typeof cards[0] === 'number') {
        cards = [cards];
    }
    
    // 5. Array for companies of invalid cards, this will return as many items are in the array
    // Again, I find using map easier that a for loop and push
    // So, if there is an invalid card with no known company identifier it will return undefined
    let array = cards.map(card => {
        if (card[0] === 3) {
            return 'Amex (American Express)';
        } else if (card[0] === 4) {
            return 'Visa';
        } else if (card[0] === 5) {
            return 'Mastercard'
        } else if (card[0] === 6) {
            return 'Discover'
        } else {
            console.log('Company not found');
        }
    });

    // Now we remove the dups from the array, remember there are as many items as the original array so dups are expected
    array = removeDups(array);
    
    // To deal with the undefined items we will use splice to delete it
    if (array.includes(undefined)) {
        array.splice(array.indexOf(undefined), 1)
    }

    return array;
};

console.log('validateCred in a valid card must return ', validateCred(valid1));
console.log('validateCred in an invalid card must return ', validateCred(invalid1));
const invalidCards = findInvalidCards(batch);
console.log('List of invalid cards:', invalidCards);
console.log(`List of companies of invalid cards: ${idInvalidCardCompanies(invalidCards)}`);
// Testing 7.1 and 7.2, I have no ideas what 7.3 means.
console.log(validateCred(4024007148607228));
console.log(validateCred('4024007148607228a'));
console.log(`List of companies of invalid cards: ${idInvalidCardCompanies(invalid1)}`);