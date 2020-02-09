// JavaScript1 - MA3 Delivery

// QUESTION 1
const sum = (a, b) => a - b;

// QUESTION 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        for(let i = 0; i < json.results.length; i++) {
            console.log(json.results[i].name);}
    })
    .catch(function(error) {
        document.location.href = "error.html";
    });

// QUESTION 3
const params = document.querySelector("p");

const changeText = text.replace("cats", "giraffes");

params.innerText = changeText;

// QUESTION 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if(params.has("userId")) {
    userId = params.get("userId");
    const userIdNumber = pareseInt(userId);

    if(userIdNumber < 10) {
        document.location.href = "first.html"
    } else if (userIdNumber >= 10) {
        document.location.href = "second.html"
    }
}   else {
    document.location.href = "third.html"
}

// QUESTION 5
function createDetails(details) {
    console.dir(details);

    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");
    container.removeChild(button);
}

// QUESTION 6
function createDetails(details) {
    const animals = document.querySelector(".animals");
    const loader = document.querySelector(".cows");

    const listing = document.createElement("li");
    listing.className = "parrots"
    listing.innerText = "Parrots";

    loader.after(listing);
}

// QUESTION 7
const secondUrl = "https://api.rawg.io/api/games/3801";

fetch(secondUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function(error) {
        console.log(error);
    });