// Write your JavaScript code here!
const { myFetch, planetPicked } = require("./scriptHelper");

addEventListener("load", function() {
    let document = window.document
    let pilot = document.querySelector("input[name=pilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoLevel]");
    let copilot = document.querySelector("input[name=coPilotName]");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        if (validateInput(copilot.value) == "Empty" || validateInput(pilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            window.alert('All fields are Required!!!');
            list.style.visibility = "hidden";
            event.preventDefault();
        }
        if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
            list.style.visibility = "hidden";
            window.alert("Enter a name for Pilot and Co-pilot.");
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden";
            window.alert("Fuel Level and Cargo Mass should be Numbers");
            event.preventDefault();
        }
        event.preventDefault();
    })


    

})
let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function(result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function() {
    console.log(listedPlanets);
    let planetPicked = planetPicked(listedPlanets);
    addDestinationInfo(window.document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
})


// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput= validateInput;
// module.exports.formSubmission= formSubmission;
// module.exports.planetPicked=planetPicked;
// module.exports.myFetch=myFetch;