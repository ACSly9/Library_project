// import modules
import Media from './media.js';
import Book from './book.js';
import CD from './cd.js';
import Movie from './movie.js';


// create media objects
let coolJams = new CD(
    "Billy Joe",
    "Cool Jams",
    ["Jam 1", "Jam 2", "Jam 3", "Jam 4"],
    148
);

let historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);

let speed = new Movie("Jan de Bont", "Speed", 116);


// add tracks, rating, toggle checkout status and test shuffle function

// CD tests
coolJams.addTrack("Jam 5");
coolJams.addTrack("Jam 6");
coolJams.addTrack("Jam 7");
console.log(coolJams.minsAndHrs());
console.log(coolJams);
console.log(coolJams.shuffle());


// Book tests
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


// Movie tests
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.runTime);
console.log(speed.minsAndHrs());
