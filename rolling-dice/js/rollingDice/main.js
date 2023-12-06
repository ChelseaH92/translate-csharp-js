console.log("Let's roll some dice, baby!");
console.log("---------------------------");

for (let i = 0; i < 10; i++) {
    let die1 = roll();
    let die2 = roll();

    let message = `${die1} + ${die2} == ${die1.value + die2.value}`;
    if (die1.value === die2.value) 
    {
        message += " DOUBLES!";
    }

    console.log(message);
}

function roll() {
    let dieValue = getRandomInt(1, 6);
    let die = new Die(dieValue);
    return die;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Die {
    constructor(value) {
        this.value = value;
    }

    toString() {
        let dieString = "Unknown";

        switch (this.value) {
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }
}
