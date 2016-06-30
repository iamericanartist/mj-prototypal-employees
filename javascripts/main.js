"use strict";
// console.log("main js open");
//////////////////////////////////EMPLOYEES
function Employee () {
  this.firstName = "";
  this.lastName = "";
}

function Clinician (x) {
  this.expertise = x; //physical therapist, phrenologist, anesthesiologist
}

function Operations () {
  this.jobType = "Operations";
  this.responsibility = ""; //IT, revenue, compliance
}

//////////////////////////////////DEPARTMENTS
function Department () {
  this.deptName = "";
}

function FieldOffice () {
  this.location = "";
}

function Headquarters () {

}

Clinician.prototype = new Employee();
Operations.prototype = new Employee();
FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();

// Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
var employee1 = new Clinician("Phrenologist");
employee1.firstName = "Eric";
employee1.lastName = "Denton";
////Department info
employee1.deptName = "Uno";
employee1.location = "Nashville";
console.log("#1Emp", employee1);


var employee2 = new Clinician("Anesthesiologist");
employee2.firstName = "Steve";
employee2.lastName = "Balmer";
////Department info
employee2.deptName = "Dos";
employee2.location = "San Diego";
console.log("#2Emp", employee2);


var employee3 = new Operations();
employee3.firstName = "Joe";
employee3.lastName = "Shmoe";
employee3.responsibility = "Revenue";
////Department info
employee3.location = new FieldOffice();
employee3.location.deptName = "Headquarters";
employee3.location.location = "San Diego";
console.log("#3Emp", employee3);


var employee4 = new Operations();
employee4.firstName = "PeeWee";
employee4.lastName = "Herman";
employee4.responsibility = "Compliance";
////Department info
employee4.location = new FieldOffice();
employee4.location.deptName = "Field Office";
employee4.location.location = "Nashville";
console.log("#4Emp", employee4);


// Output the following information to the console for each employee: Full name, Department name, Expertise/responsibility
            // Michael Slazinski works in operations, in headquarters, and is responsible for compliance.
console.log(employee4.firstName + " " + employee4.lastName + " works in " + employee4.jobType + ", in the " + employee4.location.location + 
            " " + employee4.location.deptName + " location, and is responsible for " + employee4.responsibility + ".");

console.log(`${employee3.firstName} ${employee3.lastName} works in  ${employee3.jobType}, in the ${employee3.location.location} ${employee3.location.deptName} location, and is responsible for ${employee3.responsibility}.`);

// Deborah Harris works as a clinician, in the Baltimore field office, and is a phrenologist.
// Margaret Johnson works as a clinician, in the Indianapolis field office, and is a physical therapist.

