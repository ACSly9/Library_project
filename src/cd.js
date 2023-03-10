import Media from './media.js';

class CD extends Media {
    constructor(artist, title, tracks, runTime) {
        super(title);
        this._artist = artist;
        (this._tracks = tracks), (this._runTime = runTime);
    }
    get artist() {
        return this._artist;
    }
    get tracks() {
        return this._tracks;
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
    set tracks(str) {
        if (typeof str === "string" && str.length <= 100 && str.length >= 0) {
            this._tracks.push(str);
        } else {
            console.log("Please enter word less than 100 characters long.");
        }
    }
    addTrack(str) {
        this.tracks = str;
    }
    shuffle() {
        let randArr = [];
        let shuffArr = [];
        let rand = Math.floor(Math.random() * this.tracks.length);
        for (let i = 0; i < this.tracks.length; i++) {
            if (
                randArr.some((element) => element === rand) === false &&
                randArr.length <= this.tracks.length
            ) {
                randArr[i] = rand;
            } else {
                rand = Math.floor(Math.random() * this.tracks.length);
                i--;
            }
        }
        for (let i = 0; i < randArr.length; i++) {
            shuffArr.push(this.tracks[randArr[i]]);
        }
        return shuffArr;
    }
}

export default CD;