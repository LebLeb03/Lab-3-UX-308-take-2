// Function to convert numeric grade to letter grade
function getLetterGrade(numericGrade) {
    if (numericGrade >= 90) return '+A';
    if (numericGrade >= 81) return 'A';
    if (numericGrade >= 70) return 'B';
    if (numericGrade >= 60) return 'C';
    if (numericGrade >= 50) return 'D';
    return 'F';
}

// Test cases
console.log(getLetterGrade(95)); // Expected: A+
console.log(getLetterGrade(85)); // Expected: A
console.log(getLetterGrade(75)); // Expected: B
console.log(getLetterGrade(65)); // Expected: C
console.log(getLetterGrade(50)); // Expected: D
console.log(getLetterGrade(30)); // Expected: F