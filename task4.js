// Employee Management System
console.log("----- Employee Management System -----");

let employees = [
    { name: "Amit", id: 201, salary: 45000 },
    { name: "Priya", id: 202, salary: 75000 }
];

for (let emp of employees) {
    console.log("Name:", emp.name, "| ID:", emp.id, "| Salary:", emp.salary);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}

console.log("\n");


// Student Result Portal
console.log("----- Student Result Portal -----");

let marks = [85, 90, 78, 88, 92];

let total = 0;
for (let m of marks) {
    total += m;
}

let percentage = total / marks.length;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

console.log("\n");


// E-Commerce Cart
console.log("----- E-Commerce Cart -----");

let products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 2000 },
    { name: "Keyboard", price: 4000 }
];

function calculateBill(items) {
    let total = 0;

    for (let item of items) {
        total += item.price;
    }

    console.log("Total Bill:", total);

    if (total > 5000) {
        let discount = total * 0.10;
        total -= discount;
        console.log("Discount Applied: 10%");
    }

    return total;
}

let finalAmount = calculateBill(products);
console.log("Final Payable Amount:", finalAmount);

console.log("\n");


// Login Authentication
console.log("----- Login Authentication -----");

let username = "admin";
let password = "12345";

let inputUser = "admin";
let inputPass = "12345";

let result = (username === inputUser && password === inputPass)
    ? "Login Success"
    : "Invalid Credentials";

console.log(result);

console.log("\n");


// Traffic Signal System
console.log("----- Traffic Signal System -----");

let signal = "Red";

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

// ATM Withdrawal System
console.log("----- ATM Withdrawal System -----");

let balance = 10000;   
let withdraw = 3000;   

if (withdraw <= balance) {
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance - withdraw);
} else {
    console.log("Insufficient Balance");
}

console.log("\n");


// Online Food Order (Callback)
console.log("----- Online Food Order -----");

function placeOrder(callback) {
    console.log("Order Received");
    callback();
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

placeOrder(() => {
    prepareFood(() => {
        deliverFood();
    });
});

console.log("\n");


// Cashback Generator
console.log("----- Cashback Generator -----");

function* cashback() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashback();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

console.log("\n");


// Hospital Patient Check
console.log("----- Hospital Patient Check -----");

let age = 25;
let weight = 55;

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}

console.log("\n");


// Mini Employee Portal

console.log("----- Mini Employee Portal -----");

let empList = [];

function addEmployee(name, id, salary) {
    empList.push({ name, id, salary });
    console.log("Employee Added");
}

function viewEmployees() {
    for (let emp of empList) {
        console.log(emp);
    }
}

function calculateBonus() {
    for (let emp of empList) {
        if (emp.salary >= 50000) {
            console.log(emp.name, "Eligible for Bonus");
        } else {
            console.log(emp.name, "Not Eligible");
        }
    }
}

function searchEmployee(id) {
    let found = empList.find(emp => emp.id === id);
    console.log(found ? found : "Employee Not Found");
}

function deleteEmployee(id) {
    empList = empList.filter(emp => emp.id !== id);
    console.log("Employee Deleted (if existed)");
}

function totalEmployees() {
    console.log("Total Employees:", empList.length);
}


// Sample Run
addEmployee("Rahul", 301, 40000);
addEmployee("Sneha", 302, 70000);

viewEmployees();
calculateBonus();
searchEmployee(301);
deleteEmployee(301);
totalEmployees();