import Media from './media.js';

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
    minsAndHrs(num) {
        num = this.runTime;
        let hrs = Math.floor(num / 60);
        let mins = num - Math.floor(hrs * 60);
        return `${num}mins / ${hrs}hr(s) ${mins}min(s)`;
    }
}

export default Movie;