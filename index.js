// Code your solution in this file!
// Define returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Define returnLastTwoDrivers function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Define selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define createFareMultiplier function
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

// Define fareDoubler function
const fareDoubler = createFareMultiplier(2);

// Define fareTripler function
const fareTripler = createFareMultiplier(3);

// Define selectDifferentDrivers function
const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
};

// Example usage:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers)); // Output: ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // Output: ['Amari', 'Mo']
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // Output: ['Amari', 'Mo']
console.log(createFareMultiplier(4)(10)); // Output: 40
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
