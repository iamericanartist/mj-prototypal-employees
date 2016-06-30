"use strict";

var employeesArr = [];
// Employee prototype chain
function Employee() {
  this.firstName = null;
  this.lastName = null;
  this.department = null;
  this.jobType = "valued employee";
}

function Clinician() {
  this.jobType = "clinician";
  this.specialty = "specialist";
}
Clinician.prototype = new Employee();

function Operations() {
  this.jobType = "operations team member";
  this.responsibility = "operations team member";
}
Operations.prototype = new Employee();

function Misc() {
  this.duty = "tasks as assigned by management";
}
Misc.prototype = new Employee();

// Departments prototype chain
function Department() {
  this.name = null;
}

function FieldOffice() {
  this.city = null;
}
FieldOffice.prototype = new Department();

function Headquarters() {
  this.city = "Nashville";
}
Headquarters.prototype = new Department();

// Instantiate field offices and assign city values
var regionSE = new FieldOffice();
regionSE.city = "Atlanta";
regionSE.name = "South East Regional Office"

var regionNE = new FieldOffice();
regionNE.city = "Philadelphia";
regionNE.name = "North East Regional Office"

// Instantiate a new employee and assign property values
var employee_001 = new Clinician();
employee_001.firstName = "Francine";
employee_001.lastName = "Doodleheimer";
employee_001.specialty = "physical therapist";
employee_001.department = regionSE;

var employee_002 = new Misc();
employee_002.firstName = "Bubba";
employee_002.lastName = "Hotep";
employee_002.department = regionNE;

var employee_003 = new Operations();
employee_003.firstName = "Pat";
employee_003.lastName = "DeBunny";
employee_003.department = regionNE;
employee_003.responsibility = "compliance tech";

// Add new employees to the array
// employees.push(employee_001, employee_002);

// console.log(`${employee001.firstName} ${employee001.lastName} works as a ${employee001.jobType} in the ${employee001.department.city} field office, and is a ${employee001.specialty}.`);
// console.log(`${employee002.firstName} ${employee002.lastName} works as a ${employee002.jobType} in the ${employee002.department.city} field office, and does ${employee002.duty}.`);

// Grab all the global vars and loop through them to find all the employee instances
// Then push them into the employees array
var allVars = Object.keys(window);
// console.log("allVars", allVars );
for (var variable in allVars) {
  // console.log("variable", variable);
  if (allVars[variable].indexOf("employee_") == 0) // check the prefix
    employeesArr.push(window[allVars[variable]]);
}
console.log("employees arr", employeesArr );

// Automate logging the approriate string for each employee
employeesArr.forEach(function(emp) {
  // console.log("employee", emp );
  let jobDesc,
      jobArticle = "a",
      jobString = !emp.hasOwnProperty("jobType") ? "does" : "is a";

  if (emp instanceof Operations) {
    jobDesc = `${emp.responsibility}`;
    jobArticle = "an";
  } else if (emp instanceof Clinician) {
    jobDesc = `${emp.specialty}`;
  } else {
    jobDesc = `${emp.duty}`
  }

  console.log(`${emp.firstName} ${emp.lastName} works as ${jobArticle} ${emp.jobType} in the ${emp.department.city} field office, and ${jobString} ${jobDesc}.`);
});