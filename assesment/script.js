// Array to store student objects
let students = [];

// Add student record
function addStudent() {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let math = parseInt(document.getElementById("math").value);
  let science = parseInt(document.getElementById("science").value);
  let english = parseInt(document.getElementById("english").value);

  let student = {
    name: name,
    roll: roll,
    math: math,
    science: science,
    english: english
  };

  students.push(student);
  document.getElementById("output").innerHTML = `<p>Student ${name} added successfully!</p>`;
}

// Display all students
function displayStudents() {
  let result = "<h2>All Students</h2>";
  for (let s of students) {
    result += `<p>${s.roll} - ${s.name} | Math: ${s.math}, Science: ${s.science}, English: ${s.english}</p>`;
  }
  document.getElementById("output").innerHTML = result;
}

// Calculate total and average marks
function calculateTotals() {
  let result = "<h2>Totals & Averages</h2>";
  for (let s of students) {
    let total = s.math + s.science + s.english;
    let avg = total / 3;
    result += `<p>${s.name} (Roll: ${s.roll}) → Total: ${total}, Average: ${avg.toFixed(2)}</p>`;
  }
  document.getElementById("output").innerHTML = result;
}

// Display students with average > 80
function displayAbove80() {
  let result = "<h2>Students with Avg > 80</h2>";
  for (let s of students) {
    let avg = (s.math + s.science + s.english) / 3;
    if (avg > 80) {
      result += `<p>${s.name} (Roll: ${s.roll}) → Average: ${avg.toFixed(2)}</p>`;
    }
  }
  document.getElementById("output").innerHTML = result;
}

// Display failed students (avg < 40)
function displayFailed() {
  let result = "<h2>Failed Students (Avg < 40)</h2>";
  for (let s of students) {
    let avg = (s.math + s.science + s.english) / 3;
    if (avg < 40) {
      result += `<p>${s.name} (Roll: ${s.roll}) → Average: ${avg.toFixed(2)}</p>`;
    }
  }
  document.getElementById("output").innerHTML = result;
}

// Count total students
function countStudents() {
  document.getElementById("output").innerHTML = `<h2>Total Students: ${students.length}</h2>`;
}