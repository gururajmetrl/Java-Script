
// Employee Data 
let employees1 = [
    { name: "Naveen", id: 101, salary: 30000, experience: 2 },
    { name: "John", id: 102, salary: 60000, experience: 7 },
    { name: "Arun", id: 103, salary: 45000, experience: 5 }
];

// Task 1 - Find Highest Salary
let highest = employees1.reduce((max, emp) =>
    emp.salary > max.salary ? emp : max
);

console.log("Highest Salary :", highest.salary);
console.log("Employee Name :", highest.name);

// Task 2 - Find Employee by ID
let searchId1 = 103;

let employee = employees1.find(emp => emp.id === searchId1);

if (employee) {
    console.log("\nEmployee Found");
    console.log("Name :", employee.name);
    console.log("Salary :", employee.salary);
} else {
    console.log("Employee Not Found");
}

// Task 3 - Salary with Bonus
let bonus = 5000;

console.log("\nSalary After Bonus");

employees1
    .map(emp => ({ ...emp, salary: emp.salary + bonus }))
    .forEach(emp => console.log(emp.name + " :", emp.salary));

// Task 4 - Experience Check
console.log("\nEmployee Experience");

employees1.forEach(emp => {
    let role = emp.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(emp.name + " - " + role);
});

// Task 5 - Display Employee Names
console.log("\nEmployee Names");

employees1.forEach(emp => console.log(emp.name));

// Task 6 - Display Employee IDs
console.log("\nEmployee IDs");

employees1.forEach(emp => console.log(emp.id));

// Task 7 - Total Salary
let totalSalary1 = employees1.reduce((total, emp) => total + emp.salary, 0);

console.log("\nTotal Salary :", totalSalary1);

// Task 8 - Employees Earning More Than 40000
console.log("\nEmployees Earning More Than 40000");

employees1
    .filter(emp => emp.salary > 40000)
    .forEach(emp => console.log(emp.name));

// Task 9 - Increase Salary by 5000
let updatedEmployees1 = employees1.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));

console.log("\nUpdated Salary");

updatedEmployees1.forEach(emp =>
    console.log(emp.name + " :", emp.salary)
);

// Task 10 - Employee Report
console.log("\nEmployee Report");

employees1.forEach(emp => {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID   : ${emp.id}`);
    console.log(`Salary        : ${emp.salary}`);

});

console.log("----------------------------------------");

console.log("bonus task");

// Employee Data 
let employees2 = [
    { name: "Rahul", id: 201, salary: 28000 },
    { name: "Priya", id: 202, salary: 75000 },
    { name: "Kiran", id: 203, salary: 52000 }
];


// Total Employees
console.log("Total Employees :", employees2.length);

// Highest Salary
let highestSalary = employees2.reduce((max, emp) =>
    emp.salary > max ? emp.salary : max,
    employees2[0].salary
);

console.log("Highest Salary :", highestSalary);

// Lowest Salary
let lowestSalary = employees2.reduce((min, emp) =>
    emp.salary < min ? emp.salary : min,
    employees2[0].salary
);

console.log("Lowest Salary :", lowestSalary);

// Total Salary
let totalSalary2 = employees2.reduce((sum, emp) =>
    sum + emp.salary,
    0
);

console.log("Total Salary :", totalSalary2);

// Highest Paid Employee
let highestEmp = employees2.reduce((max, emp) =>
    emp.salary > max.salary ? emp : max
);

console.log("Highest Paid Employee :", highestEmp.name);

// Lowest Paid Employee
let lowestEmp = employees2.reduce((min, emp) =>
    emp.salary < min.salary ? emp : min
);

console.log("Lowest Paid Employee :", lowestEmp.name);

// Employees Salary > 40000
console.log("\nEmployees Earning More Than 40000");

employees2
    .filter(emp => emp.salary > 40000)
    .forEach(emp => console.log(emp.name));

// Search Employee by ID
let searchId2 = 202;

let found = employees2.find(emp => emp.id === searchId2);

if (found) {
    console.log("\nEmployee Found :", found.name);
} else {
    console.log("\nEmployee Not Found");
}

// Add Bonus
let updatedEmployees2 = employees2.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));

console.log("\nSalary After Bonus");

updatedEmployees2.forEach(emp =>
    console.log(emp.name + " :", emp.salary)
);

// Employee Report
console.log("\nEmployee Report");

employees2.forEach(emp => {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID   : ${emp.id}`);
    console.log(`Salary        : ${emp.salary}`);
});