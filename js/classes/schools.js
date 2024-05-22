// School Catalogue

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    
    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        return typeof value === 'number' ? this._numberOfStudents = numberOfStudents : console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        this._sportsTeams.forEach(sport => {
            console.log(sport);
        });
        return this._sportsTeams;
    }
}

class SchoolCatalog {
    constructor(level) {
        this._level = level;
        this._list= [];
    }

    get level() {
        return this._level;
    }

    get list() {
        return this._list;
    }

    addSchool(school) {
        if (this.level !== school.level) {
            console.log(`You can only add ${this.level} schools to this catalog.`);
            return ;
        }

        this.list.push(school);
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

const highSchoolCatalog = new SchoolCatalog('high');

highSchoolCatalog.addSchool(lorraineHansbury);
highSchoolCatalog.addSchool(alSmith);

console.log(highSchoolCatalog.list);