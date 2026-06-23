// ===============================
// Task 1: Employee Information System
// ===============================
let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");
let empDept = prompt("Enter Employee Department:");
let empSalary = Number(prompt("Enter Employee Salary:"));

let employee = {
    name: empName,
    age: empAge,
    department: empDept,
    salary: empSalary
};

console.log("Employee Details:", employee);

if (empSalary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}


// ===============================
// Task 2: Supermarket Billing
// ===============================
let product = prompt("Enter Product Name:");
let price = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));

let totalBill = price * quantity;

if (totalBill > 5000) {
    totalBill = totalBill - (totalBill * 0.10);
}

console.log("Final Amount:", totalBill);


// ===============================
// Task 3: Student Result Portal
// ===============================
let studentName = prompt("Enter Student Name:");
let marks = Number(prompt("Enter Marks:"));

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ===============================
// Task 4: Bank ATM
// ===============================
let userName = prompt("Enter User Name:");
let balance = Number(prompt("Enter Account Balance:"));
let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}


// ===============================
// Task 5: Login Validation
// ===============================
let username = "gururaj";
let password = "gururaj@123";

let inputUser = prompt("Enter Username:");
let inputPass = prompt("Enter Password:");

if (inputUser === username && inputPass === password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// ===============================
// Task 6: Online Food Order
// ===============================
let foods = ["Pizza", "Burger", "Pasta", "Biryani", "Dosa", "Idli", "Noodles", "Sandwich"];

console.log("First Item:", foods[0]);
console.log("Last Item:", foods[foods.length - 1]);
console.log("Total Items:", foods.length);

for (let item of foods) {
    console.log(item);
}


// ===============================
// Task 7: Company Employee Directory
// ===============================
let emp = {
    name: "gururaj",
    age: 24,
    department: "software development",
    salary: 35000,
    experience: "1 years"
};

for (let key in emp) {
    console.log(key + " : " + emp[key]);
}


// ===============================
// Task 8: Traffic Signal System
// ===============================
let signal = prompt("Enter signal color (Red/Yellow/Green):");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


// ===============================
// Task 9: Age Category Checker
// ===============================
let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}


// ===============================
// Task 10: Employee Attendance
// ===============================
let empN = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log("Welcome " + empN);

let result = (attendance.toLowerCase() === "present")
    ? "Attendance: Present"
    : "Attendance: Absent";

console.log(result);