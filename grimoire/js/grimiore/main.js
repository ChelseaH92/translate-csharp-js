console.log("Do you believe in magic?");
console.log("------------------------");

let allSpells = getAllSpells();
let goodBook = makeGoodSpellBook(allSpells);
let evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
console.log();
displaySpellBook(evilBook);

function displaySpellBook(book) {
    console.log(book.title);
    for (let aSpell of book.spells) {
        console.log(`  ${aSpell.name}`);
    }
}

function makeEvilSpellBook(allSpells) {
    let evilBook = new SpellBook();
    evilBook.title = "Evil Book";
    evilBook.spells = allSpells.filter(spell => spell.isEvil);

    return evilBook;
}

function makeGoodSpellBook(allSpells) {
    let goodBook = new SpellBook();
    goodBook.title = "Good Book";
    goodBook.spells = allSpells.filter(spell => !spell.isEvil);

    return goodBook;
}

function getAllSpells() {
    let allSpells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ];

    return allSpells;
}

class SpellBook {
    constructor() {
        this.title = "";
        this.spells = [];
    }
}

class Spell {
    constructor() {
        this.name = "";
        this.isEvil = false;
        this.energyRequired = 0.0;
    }
}
