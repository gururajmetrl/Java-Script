
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

let skills = [
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

let company = {
  name: "Stackly IT",
  location: "hydrabad",
};

// ==============================
// LOGIN VERIFICATION
// ==============================

let username = "gururaj";
let password = "guru@123";

let loginStatus =
  username === "gururaj" && password === "guru@123"
    ? "Success"
    : "Failed";

// ==============================
// SALARY & BONUS CALCULATION
// ==============================

let bonus = 5000;
let finalSalary = employee.salary + bonus;

// ==============================
// ATTENDANCE CHECK (TERNARY)
// ==============================

let examStatus = employee.attendance >= 75 ? "Eligible" : "Not Eligible";

// ==============================
// EXPERIENCE CHECK
// ==============================

let experienceStatus =
  employee.experience >= 2 ? "Experienced" : "Fresher";

console.log("Experience Status :", experienceStatus);

// ==========================
// USER INTERACTION
// ==========================

let userNameInput = prompt("Enter your name:");
let join = confirm("Do you want to continue?");

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
