class GuessingGame {
    constructor() {}

    minValue;
    maxValue;
    number;
    guessNumber;

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.guessNumber = Math.round((this.minValue + this.maxValue) / 2);
        return this.guessNumber;
    }

    lower() {
        this.maxValue = this.guessNumber;
    }

    greater() {
        this.minValue = this.guessNumber;
    }
}

module.exports = GuessingGame;
