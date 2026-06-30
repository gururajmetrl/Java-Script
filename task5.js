
// 1. Employee Yearly Salary

function getYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

let yearlySalary = getYearlySalary(45000);
console.log("Yearly Salary : ₹" + yearlySalary);



// 2. Student Pass or Fail

function checkResult(marks) {
    return marks >= 35 ? "Pass" : "Fail";
}

let result = checkResult(72);
console.log("Result : " + result);



// 3. Food Bill

function calculateBill(price, quantity) {
    return price * quantity;
}

let totalBill = calculateBill(180, 3);
console.log("Total Bill : ₹" + totalBill);



// 4. Welcome Employee

function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

welcomeEmployee("gururaj", "Development");


// 5. Shopping Discount

function finalAmount(price, discount) {
    return price - discount;
}

let amount = finalAmount(5000, 500);
console.log("Final Amount : ₹" + amount);



// 6. Company Login (Callback)

function loginSuccess(callback) {
    console.log("Login Successful");
    callback();
}

function loadDashboard() {
    console.log("Loading Dashboard...");
}

loginSuccess(loadDashboard);



// 7. Food Delivery (Callback)

function processStep(step) {
    console.log(step);
}

function foodDelivery(callback) {
    callback("Order Received");
    callback("Preparing Food");
    callback("Out for Delivery");
    callback("Delivered");
}

foodDelivery(processStep);



// 8. Lucky Draw (Generator)

function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let draw = luckyDraw();

console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);



// 9. Employee Bonus (Closure)
function bonus(baseSalary) {
    return function (extra) {
        return "Total Salary : ₹" + (baseSalary + extra);
    };
}

console.log(bonus(50000)(5000));



// 10. Merge Employee Details (Spread Operator)

let employeePersonal = {
    name: "gururaj",
    age: 25
};

let employeeOffice = {
    department: "Development",
    salary: 30000
};

let employeeDetails = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employeeDetails);



// 11. Shopping Cart (Spread Operator)

let cart1 = ["Mobile", "Laptop"];
let cart2 = ["Headphone", "Keyboard"];

let mergedCart = [...cart1, ...cart2];

console.log(mergedCart);



// 12. Student Marks (Rest Parameter)

function student(name, ...marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    console.log("Student : " + name);
    console.log("Total Marks : " + total);
    console.log("Average : " + average);
}

student("gururaj", 80, 95, 98, 90);



// 13. Product Details (Object Destructuring)

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price } = product;

console.log("Name : " + name);
console.log("Price : ₹" + price);

// 14. Customer Details (Array Destructuring)

let customer = [105, "gururaj", "gulbarga", 8792458979];

let [id, customerName, city] = customer;

console.log("ID : " + id);
console.log("Name : " + customerName);
console.log("City : " + city);



// 15. Add Product (push)

let shoppingCart = ["Mobile", "Laptop"];

shoppingCart.push("Headphone");

console.log(shoppingCart);



// 16. Remove Last Product (pop)

let shoppingCart2 = ["Mobile", "Laptop", "Headphone"];

shoppingCart2.pop();

console.log(shoppingCart2);



// 17. Replace Employee (splice)

let employeeNames = ["Rahul", "Arun", "John", "David"];

employeeNames.splice(2, 1, "Naveen");

console.log(employeeNames);



// 18. Search Product (includes)

let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

console.log(products.includes("Laptop"));



// 19. Employee Ranking (sort)

let salaries = [25000, 45000, 30000, 70000];

salaries.sort((a, b) => a - b);

console.log(salaries);


// 20. Reverse Chat Messages

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log(messages);


// Employee Management System

let employees = [];

// Add Employee
function addEmployee(id, name, salary, department) {
    employees.push({ id, name, salary, department });
    console.log("Employee Added");
}

// View Employees
function viewEmployees() {
    console.log("\nAll Employees");
    employees.forEach(emp => console.log(emp));
}

// Search by ID
function searchById(id) {
    let emp = employees.find(e => e.id === id);

    if (emp) {
        console.log("\nEmployee Found");
        console.log(emp);
    } else {
        console.log("Employee Not Found");
    }
}

// Calculate Salary + Bonus
function calculateSalary(id, bonusAmount) {
    let emp = employees.find(e => e.id === id);

    if (emp) {
        console.log("Total Salary : ₹" + (emp.salary + bonusAmount));
    } else {
        console.log("Employee Not Found");
    }
}

// Remove Employee
function removeEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    console.log("Employee Removed");
}

// Sort by Salary
function sortBySalary() {
    employees.sort((a, b) => a.salary - b.salary);

    console.log("\nEmployees Sorted by Salary");

    employees.forEach(emp => console.log(emp));
}

// Find by Name
function findByName(name) {
    let result = employees.filter(emp =>
        emp.name.toLowerCase() === name.toLowerCase()
    );

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("Employee Not Found");
    }
}

// Display Employee 
function displayEmployee(id) {
    let emp = employees.find(e => e.id === id);

    if (emp) {
        let { id, name, salary, department } = emp;

        console.log("\nEmployee Details");
        console.log("ID :", id);
        console.log("Name :", name);
        console.log("Salary : ₹" + salary);
        console.log("Department :", department);
    } else {
        console.log("Employee Not Found");
    }
}



addEmployee(101, "gururaj", 30000, "Development");
addEmployee(102, "Rahul", 40000, "Testing");
addEmployee(103, "Arun", 60000, "HR");

viewEmployees();

searchById(101);

calculateSalary(101, 5000);

findByName("Naveen");

sortBySalary();

displayEmployee(101);

removeEmployee(102);

viewEmployees();