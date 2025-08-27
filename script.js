// ==============================
// Part 1: Mastering JavaScript Basics
// ==============================

// Variables
let name = "Germano";
let age = 20;
let part1Output = document.getElementById("part1-output");

// Conditional
if (age >= 18) {
    part1Output.innerHTML = `<strong>${name}</strong> is an adult. ✅`;
} else {
    part1Output.innerHTML = `<strong>${name}</strong> is a minor. ❌`;
}

// ==============================
// Part 2: Custom Functions
// ==============================

// Function 1: Greet user
function greetUser(userName) {
    return `👋 Welcome, ${userName}!`;
}

// Function 2: Calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Display results
let part2Output = document.getElementById("part2-output");
part2Output.innerHTML = `
${greetUser(name)}<br>
Factorial of 5 is ${factorial(5)} 🔢
`;

// ==============================
// Part 3: Loops in Action
// ==============================

// Loop Example 1: For loop
let numbers = [10, 20, 30, 40, 50];
let part3Output = document.getElementById("part3-output");
part3Output.innerHTML = "<strong>Numbers in array:</strong><br>";
for (let i = 0; i < numbers.length; i++) {
    part3Output.innerHTML += `${numbers[i]}<br>`;
}

// Loop Example 2: While loop
let count = 1;
part3Output.innerHTML += "<br><strong>Counting using while loop:</strong><br>";
while (count <= 3) {
    part3Output.innerHTML += `Count: ${count}<br>`;
    count++;
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// 1) Change page title
document.getElementById("change-title-btn").addEventListener("click", function() {
    document.getElementById("main-title").innerText = "🚀 JavaScript is Awesome!";
});

// 2) Toggle color class
document.getElementById("toggle-color-btn").addEventListener("click", function() {
    document.getElementById("main-title").classList.toggle("red");
});

// 3) Add item to list
document.getElementById("add-item-btn").addEventListener("click", function() {
    let list = document.getElementById("item-list");
    let newItem = document.createElement("li");
    newItem.innerText = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});
