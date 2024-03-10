// Returns a random DNA base
const returnRandBase = (except) => {
    // I change this function so it can delete a base 
    // This way we could used in the mutate method to generete a new base that is not the selected base
    // I think is better than use while because RNGesus could take a while to get us a different base
    const dnaBases = ['A', 'T', 'C', 'G'];
    if (except) {
        dnaBases.splice(dnaBases.indexOf(except), 1);
    }
    return dnaBases[Math.floor(Math.random() * dnaBases.length)] ;
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
}

// 3. Factory function
const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutate() {
            // 4. I used a modified version of returnRandBase to take a exception so I don't use while
            const selectedBase = this.dna[Math.floor(Math.random() * dna.length)];
            const baseIndex = this.dna.indexOf(selectedBase);
            const newBase = returnRandBase(selectedBase);
            this.dna[baseIndex] = newBase;
            //console.log(`Selected base: ${selectedBase}, Index of selected base: ${baseIndex}, New base: ${newBase}`);
            return this.dna;
        },
        compareDNA(pAequor) {
            let identicalBasesCount = 0;
            const myDna = this.dna;
            myDna.forEach((base, index) => {
                if (myDna[index] == pAequor.dna[index]) {
                    identicalBasesCount++;
                }
            });
            const percentge = identicalBasesCount/myDna.length * 100;
            return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentge}% DNA in common`;
        },
        willLikelySurvive() {
            // 5. This method is almost equal to compareDNA()
            let basesCount = 0;
            const myDna = this.dna;
            myDna.forEach((base) => {
                if (base === 'C' || base === 'G') {
                    basesCount++;
                }
            });
            const percentge = basesCount / myDna.length * 100;
            return percentge >= 60;
        },
        complementStrand() {
            return this.dna.map(base => {
                if (base === 'A')
                    return 'T';
                if (base === 'A')
                    return 'T';
                if (base === 'C')
                    return 'G';
                if (base === 'G')
                    return 'C';
                return base;
            });
        }
    }
}

// 6. We created a function that create pAequors until a given number is reach
const createpAequorUntil = number => {
    // Just for fun let's see how many pAequors are created before the quota is reached
    let survivedCount = 0, createdCount = 0;
    const survivedpAequor = []

    while (survivedCount < number) {
        let pAequor = pAequorFactory(createdCount, mockUpStrand());
        if (pAequor.willLikelySurvive()) {
            survivedpAequor.push(pAequor);
            survivedCount++;
        }
        createdCount++;
    }

    // This will be brutal, be aware.
    console.log(`${createdCount} pAequors were created. ${createdCount - survivedCount} didn't make it.`)

    return survivedpAequor;
}

// Tests

const pAequorA = pAequorFactory('a', mockUpStrand());
const pAequorB = pAequorFactory('b', mockUpStrand());
console.log(pAequorA);
console.log(pAequorB);
// Check compareDNA method
console.log(pAequorA.compareDNA(pAequorB));

// Check if a pAequor will survive
console.log(pAequorA.willLikelySurvive());

// 7. Create 30 pAequors that can survive
const pAequorsSample = createpAequorUntil(30);

// Print the array of apex pAequors
console.log(pAequorsSample.length);

// Check complementStrand method
console.log(pAequorA.complementStrand());