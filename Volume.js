// Function to calculate the volume of a cylinder
function calculateCylinderVolume(diameter, height) {
    const radius = diameter / 2;
    const volume = Math.PI * Math.pow(radius, 2) * height;
    return volume;
}

// Test cases
console.log(calculateCylinderVolume(2, 4)); // Expected: ~12.566 (π * 1^2 * 4)
console.log(calculateCylinderVolume(10, 20)); // Expected: ~1570.8 (π * 5^2 * 20)
console.log(calculateCylinderVolume(0, 10)); // Expected: 0