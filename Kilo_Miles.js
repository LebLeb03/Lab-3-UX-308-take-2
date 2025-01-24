// Function to convert kilometers to miles
function convertKilometersToMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
}

// Test cases
console.log(convertKilometersToMiles(1)); // Expected: 0.621371
console.log(convertKilometersToMiles(5)); // Expected: 3.106855
console.log(convertKilometersToMiles(0)); // Expected: 0