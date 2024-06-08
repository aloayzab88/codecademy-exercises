class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encrypt(text) {
        let textArray = text.split('');
        textArray = textArray.map(element => {
            const charcode = element.toUpperCase().charCodeAt(0);
            if (element === ' ' || charcode < 65 || charcode > 90) return element;
            let newChar = charcode + this.shift;
            if (newChar > 90) {
                newChar = (newChar - 90) + 64;
            }
            return String.fromCharCode(newChar);
        });
        return textArray.join('')
    }

    decrypt(text) {
        let textArray = text.split('');
        textArray = textArray.map(element => {
            const charcode = element.toLowerCase().charCodeAt(0);
            if (element === '' || charcode < 97 || charcode > 122) return element;
            let newChar = charcode - this.shift;
            if (newChar < 97) {
                newChar = 123 - (97 - newChar); 
            }
            return String.fromCharCode(newChar)
        });
        return textArray.join('');
    }
}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!'));
console.log(cipher.decrypt('K <3 OA RWRRA'));

// A 65
// Z 90
// a 97
// z 122