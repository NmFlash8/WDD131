// arrays.js

// Activity 1: Map Method (HTML List)
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: Map Method (GPA Points Conversion)
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#gpaPoints").textContent = `GPA Points: ${gpaPoints.join(", ")}`;

// Activity 3: Reduce Method (Calculate GPA)
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;
document.querySelector("#gpa").textContent = `GPA: ${gpa.toFixed(2)}`;

// Activity 4: Filter Method (Short Words)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#shortWords").textContent = `Short Words: ${shortWords.join(", ")}`;

// Activity 5: IndexOf Method (Find Lucky Number)
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#luckyNumber").textContent = luckyIndex !== -1 ? `Lucky Number ${luckyNumber} found at index ${luckyIndex}.` : "Lucky Number not found.";
