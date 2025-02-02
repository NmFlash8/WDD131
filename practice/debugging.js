const PI = 3.14; // Define PI as a constant
let area = 0; // Initialize area variable

function circleArea(radius) {
    return radius * radius * PI; // Corrected formula for area of a circle
}

// Calculate area for radius 3
area = circleArea(3);
console.log("Area1:", area);

// Calculate area for radius 4
area = circleArea(4);
console.log("Area2:", area);
