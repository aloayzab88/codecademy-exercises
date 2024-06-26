// Books-´N-Stuff media library

class Media {
    constructor(title, ratings=[]) {
        this._title = null;
        this._isCheckedOut = false;
        this._ratings = null;

        // use setters to validate data on new instance
        this.title = title;
        this.ratings = ratings;

        catalog.list.push(this);
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set title(value) {
        (typeof value === 'string' && value.trim() !== '') ? this._title = value : console.log('title must be a valid string.');
    }

    set isCheckedOut(value) {
        typeof value === 'boolean' ? this._isCheckedOut = value : console.log('isCheckedOut must be a boolean.');
    }

    set ratings(value) {
        if (!Array.isArray(value)) {
            console.log('ratings must be an array.');
            return;
        }

        value.every(item => (typeof item === 'number' && item > 0 && item < 6)) ? this._ratings = value : console.log('rating items must be numbers between 1 and 5.');
    }

    getAverageRating() {
        return this.ratings.length ? +(this.ratings.reduce((prev, next) => +prev + +next)/this.ratings.length).toFixed(1) : 'No ratings available.';
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isCheckedOut;
    }

    addRating(rating) {
        if (isNaN(rating) || rating === '' || rating < 0 || rating > 6) {
            console.log('Added rating must be a number between 1 and 5.');
            return;
        }

        this.ratings.push(+rating);
    }
}

class Book extends Media {
    constructor(author, title, pages, ratings) {
        super(title, ratings);
        this._author = null;
        this._pages = null;

        this.author = author;
        this.pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    set author(value) {
        (typeof value === 'string' && value.trim() !== '') ? this._author = value : console.log('author must be a valid string.');
    }

    set pages(value) {
        typeof value === 'number' ? this._pages = value : console.log('pages must be a valid number.');
    }
}

class Movie extends Media {
    constructor(director, title, runTime, ratings) {
        super(title, ratings);
        this._director = null;
        this._runTime = null;

        this.director = director;
        this.runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
    
    set director(value) {
        (typeof value === 'string' && value.trim() !== '') ? this._director = value : console.log('director must be a valid string.');
    }

    set runTime(value) {
        typeof value === 'number' ? this._runTime = value : console.log('runTime must be a valid number.');
    }
}

class CD extends Media {
    constructor(artist, title, ratings, songs) {
        super(title, isCheckedOut, ratings);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    set artist(value) {
        (typeof value === 'string' && value.trim() !== '') ? this._artist = value : console.log('artist must be a valid string.');
    }

    set songs(value) {
        if (!Array.isArray(value)) {
            console.log('songs must be an array.');
            return ;
        }

        value.every(item => typeof item === 'string' && item.trim() !== '' ? this._songs = value : console.log('song items must be strings'))
    }

    shuffle() {
        const shuffleSongs = []
        let songsCopy = [...this.songs];
        for (let i = songsCopy.length - 1; i >= 0; i--) {
            const index = Math.floor(Math.random() * (i + 1));
            shuffleSongs.push(songsCopy[index]);
            songsCopy.splice(index,1);
        }
        return shuffleSongs;
    }
}

class Catalog {
    constructor() {
        this._list = []
    }

    get list() {
        return this._list;
    }
}

const catalog = new Catalog();


const mediaTest = new Media('', [5,5,5]);
console.log(mediaTest);
mediaTest.toggleCheckOutStatus();
console.log(mediaTest.isCheckedOut);
mediaTest.addRating('5');
console.log(mediaTest.getAverageRating());

const csm = new Book('Tatsuki Fujimoto', 'Chainsaw Man', 1200, [5,5,5,5])

csm.toggleCheckOutStatus();
csm.addRating(5);

const { title, author, pages, ratings, isCheckedOut } = csm;

console.log(`${title} is manga written and ilustrated by ${author}, it has ${pages} pages and a rating of ${csm.getAverageRating()} based on ${ratings.length} reviews. Currently ${isCheckedOut ? 'is not' : 'is'} available for check out.`);

const meteora = new CD(
    'Linkin Park', 
    'Meteora', 
    [10, 10, 10], 
    ['Foreword',
    'Don\'t Stay',
    'Somewhere I Belong',
    'Lying from You',
    'Hit the Floor',
    'Easier to Run',
    'Faint',
    'Figure.09',
    'Breaking the Habit',
    'From the Inside',
    'Nobody\'s Listening',
    'Session',
    'Numb']
);

console.log(meteora.shuffle()); 

console.log(catalog.list);