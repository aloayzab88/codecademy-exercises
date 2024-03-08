const employee = (_firstName = 'John', _lastName = 'Doe', _salary = 0, _department = '') => {
    return {
        _firstName,
        _lastName,
        _salary,
        _department,
        _raises: {},
        _companyName: 'aesucks',
        set firstName(firstName) {
            if (typeof firstName == 'string' && firstName !== '') {
                this._firstName = firstName;
            } else {
                console.log('Please, enter a valida first name.');
            } 
        },
        set lastName(lastName) {
            if (typeof lastName == 'string' && lastName !== '') {
                this._lastName = lastName;
            } else {
                console.log('Please, enter a valida last name.');
            }   
        },
        set fullName(fullName) {
            console.log('You must set the first and last name individually.');
        },
        get fullName() {
            return `${this._firstName} ${this._lastName}`;
        },
        set salary(amount) {
            if (typeof amount === 'number') {
                if (amount > 0) {
                    this._salary = amount;
                } else {
                    console.log('Please, enter an amount greather than 0');
                }
            } else {
                console.log('Please, enter an amount in numbers.');
            }
        },
        get salary() {
            return `$${this._salary}`;
        },
        set raises(amount) {
            console.log('You must set a raise with the raise function and pass an amount or percentage.');
        },
        get raises() {
            return this._raises;
        },
        set department(newDepartment) {
            if (typeof newDepartment === 'string' && newDepartment !== '') {
                this._department = newDepartment;
            } else {
                console.log('Please, enter a valid deparment');
            }
        },
        get department() {
            return this._department;
        },
        set email(email) {
            console.log('Email in generated automaticly.');
        },
        get email() {
            const email = `${this._firstName.at(0).toLowerCase()}${this._lastName.toLocaleLowerCase()}@${this._companyName}.com`;
            return email
        },
        raise(amount) {
            if (typeof amount === 'string' && amount.at(-1) === '%') {
                amount = this._salary * amount.split('%')[0] / 100;
                this._salary += amount;
            } else if (typeof amount === 'number') {
                this._salary += amount;
            } else {
                console.log('Please, enter a valid amout or percentage');
            }
            const currentRaise = { [Object.keys(this._raises).length + 1]: `$${amount}` }
            this._raises = { ...this._raises, ...currentRaise };            
        },
        printInfo() {
            const {fullName, salary, department, raises, email} = this;
            const info = `[Employee information]
Full name: ${fullName}
Email: ${email}
Curent deparment: ${department}
Salary: ${salary}
Past raises: ${JSON.stringify(raises)}`;
            console.log(info);
        }
    }
}

const alejandroLoayza = employee('Alejandro', 'Loayza', 1000, 'Front-end Development');
alejandroLoayza.raise(1000);
alejandroLoayza.raise('100%');
alejandroLoayza.printInfo();
