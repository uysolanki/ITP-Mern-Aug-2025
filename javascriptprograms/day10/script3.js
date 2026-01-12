function display(message) {
    document.querySelector("#one").innerHTML = message;
}

// Function that returns a Promise
function checkEligibility(age) {
    return new Promise((resolve, reject) => {

        // simulate async task (API / DB check)
        setTimeout(() => {

            if (isNaN(age)) {
                reject("Invalid input. Please enter a number.");
            } 
            else if (age < 0) {
                reject("Age cannot be negative.");
            } 
            else if (age >= 18) {
                resolve("Eligible: You are an adult.");
            } 
            else {
                reject("Not eligible: You are a minor.");
            }

        }, 1500);
    });
}

// Getting input
let age = parseInt(prompt("Enter Age"));

// Consuming the Promise
checkEligibility(age)
    .then(result => {
        display(result);
    })
    .catch(error => {
        display(error);
    })
    .finally(() => {
        console.log("Eligibility check completed.");
    });




// function display(message) {
//     document.querySelector("#one").innerHTML = message;
// }

// function checkEligibility(age) {

//         setTimeout(() => {

//             if (isNaN(age)) {
//                 return("Invalid input. Please enter a number.");
//             } 
//             else if (age < 0) {
//                 return("Age cannot be negative.");
//             } 
//             else if (age >= 18) {
//                 return("Eligible: You are an adult.");
//             } 
//             else {
//                 return("Not eligible: You are a minor.");
//             }

//         }, 1500);
//     }

// let age = parseInt(prompt("Enter Age"));

// result=checkEligibility(age)
// display(result);