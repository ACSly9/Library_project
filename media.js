class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
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
    getAverageRating() {
        return (
            this.ratings.reduce((a, b) => a + b) / this.ratings.length
        ).toPrecision(3);
    }
    set isCheckedOut(newBool) {
        if (typeof newBool === "boolean") {
            this._isCheckedOut = newBool;
        }
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    set ratings(num) {
        if (typeof num === "number" && num <= 10 && num >= 0) {
            this._ratings.push(num);
        } else {
            console.log("Please enter a number between 0 - 10.");
        }
    }
    addRating(num) {
        this.ratings = num;
    }
}

export default Media;