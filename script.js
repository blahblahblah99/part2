// File: script.js
// Desc: This file shows a few algorithms
// Author: Keegan Hughes
// Date: 10/10/2025
// Modified: 24/10/2025

// create the myMovie object and log it out
let myMovie = {title:"The longest day", year:1964};
console.log(myMovie);

// add a rating and summary property to the object and log it out
myMovie.rating = 5;
myMovie.summary = "World War II movie about the Normandy landings";
console.log(myMovie);

// change the rating and year properties and log it out
myMovie.rating = 4;
myMovie.year = 1962;
console.log(myMovie);

// delete the summary property from the object and log it out
delete myMovie.summary;
console.log(myMovie);