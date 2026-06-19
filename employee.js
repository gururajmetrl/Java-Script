// Task 1: Employee Registration

let empName = "gururaj p metri";
let empId = "EMP3000";
let department = "Development";
let salary = 30000;
const isPermanent = true;

console.log(`Employee Details
----------------
Name       : ${empName}
ID         : ${empId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}`);

// Task 2: Employee Skills

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "java",
    "spring boot",
];

console.log("\nEmployee Skills");
console.log("First Skill  :", skills[0]);
console.log("Second Skill :", skills[1]);
console.log("Third Skill  :", skills[2]);
console.log("Fourth Skill :", skills[3]);
console.log("Last Skill   :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);

// Task 3: Company Object

let company = {
    companyName: "stackly",
    location: "hydrabad",
    employees: 1500,
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
};

console.log("\nCompany Details");
console.log("Company Name       :", company.companyName);
console.log("Location           :", company.location);
console.log("Second Technology  :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);

// Task 4: Salary Calculator

let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.1;
let finalSalary = totalSalary - tax;

console.log("\nSalary Calculation");
console.log("Basic Salary :", basicSalary);
console.log("Bonus        :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax (10%)    :", tax);
console.log("Final Salary :", finalSalary);

// Task 5: Attendance Checker

let attendance = 90;

let result = attendance >= 70 ? "Eligible for Exam" : "Not Eligible";

console.log("\nAttendance Result :", result);

// Task 6: Login Verification

let username = "guru";
let password = "guru@8979";

if (username === "guru" && password === "guru@8979") {
    console.log("\nLogin Successful");
} else {
    console.log("\nInvalid Credentials");
}

// Task 7: Product Billing

let productName = "Laptop";
let productPrice = 60000;
let quantity = 5;

let totalBill = productPrice * quantity;

console.log(`\nProduct Billing
Product  : ${productName}
Price    : ${productPrice}
Quantity : ${quantity}
Total    : ${totalBill}`);

// Task 8: Increment & Decrement

let visitors = 100;

console.log("\nIncrement & Decrement");

// Pre Increment → increases first, then prints
console.log("Pre Increment :", ++visitors); // 101

// Post Increment → prints first, then increases
console.log("Post Increment :", visitors++); // 101 (then becomes 102)

// Pre Decrement → decreases first, then prints
console.log("Pre Decrement :", --visitors); // 101

// Post Decrement → prints first, then decreases
console.log("Post Decrement :", visitors--); // 101 (then becomes 100)

// Task 9: Comparison Checker

console.log(10 == "10");
console.log(10 === "10");
console.log(20 != "20");
console.log(20 !== "20");
console.log(5 < 10);
console.log(15 >= 20);
console.log(100 <= 100);

// Task 10: User Interaction

let userName = prompt("Enter Employee Name:");
let age = prompt("Enter Employee Age:");

let join = confirm("Do you want to join our company?");

if (join) {
    alert(`Welcome ${userName}`);
} else {
    alert("Thank You");
}





//mini employee portal



// ==============================
// EMPLOYEE OBJECT
// ==============================

let employee = {
    name: "Gururaj p metri",
    id: "EMP3000",
    department: "Development",
    experience: 0,
    salary: 30000,
    attendance: 90,
};

// ==============================
// SKILLS ARRAY
// ==============================

skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "java",
    "spring boot",
];

// ==============================
// COMPANY OBJECT
// ==============================

company = {
    name: "Stackly IT",
    location: "hydrabad",
};

// ==============================
// LOGIN VERIFICATION
// ==============================

username = "gururaj";
password = "guru@123";

let loginStatus =
    username === "gururaj" && password === "guru@123"
        ? "Success"
        : "Failed";

// ==============================
// SALARY & BONUS CALCULATION
// ==============================

bonus = 5000;
finalSalary = employee.salary + bonus;

// ==============================
// ATTENDANCE CHECK (TERNARY)
// ==============================

examStatus = employee.attendance >= 75 ? "Eligible" : "Not Eligible";

// ==============================
// EXPERIENCE CHECK
// ==============================

experienceStatus =
    employee.experience >= 2 ? "Experienced" : "Fresher";

console.log("Experience Status :", experienceStatus);

// ==========================
// USER INTERACTION
// ==========================

let userNameInput = prompt("Enter your name:");
join = confirm("Do you want to continue?");

if (join) {
    alert(`Welcome ${userNameInput}`);
} else {
    alert("Thank You");
}

// ==============================
// FINAL OUTPUT (TEMPLATE STRING)
// ==============================

console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.name}

Employee ID   : ${employee.id}

Department    : ${employee.department}

Experience    : ${employee.experience} Years

Salary        : ₹${employee.salary}

Bonus         : ₹${bonus}

Final Salary  : ₹${finalSalary}

Skills        : ${skills.join(", ")}

Attendance    : ${employee.attendance}%

Exam Status   : ${examStatus}

Login Status  : ${loginStatus}

Company       : ${company.name}

Location      : ${company.location}

==============================
`);







// FOOD ORDER SYSTEM

let customer = prompt("Enter Customer Name");

let menu = {
    burger: 120,
    pizza: 250,
    fries: 80,
    pasta: 180
};

let burgerQty = Number(prompt("Burger Quantity"));
let pizzaQty = Number(prompt("Pizza Quantity"));
let friesQty = Number(prompt("Fries Quantity"));
let pastaQty = Number(prompt("Pasta Quantity"));

let burgerTotal = menu.burger * burgerQty;
let pizzaTotal = menu.pizza * pizzaQty;
let friesTotal = menu.fries * friesQty;
let pastaTotal = menu.pasta * pastaQty;

let subTotal =
    burgerTotal +
    pizzaTotal +
    friesTotal +
    pastaTotal;

let gst = subTotal * 0.05;

let discount = subTotal >= 1000 ? subTotal * 0.10 : 0;

let finalBill = subTotal + gst - discount;

let status = finalBill > 0 ? "Order Confirmed" : "No Order";

let receipt = `
🍕 FOOD ORDER SYSTEM

Customer : ${customer}

Burger : ₹${burgerTotal}
Pizza  : ₹${pizzaTotal}
Fries  : ₹${friesTotal}
Pasta  : ₹${pastaTotal}

Sub Total : ₹${subTotal}
GST (5%)  : ₹${gst}
Discount  : ₹${discount}

Final Bill : ₹${finalBill}

Status : ${status}
`;

console.log(receipt);
alert(receipt);