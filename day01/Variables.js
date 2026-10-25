let studentName = "James";
let studentAge = 25;
let isFullTime = true;
console.log(studentName);
console.log(typeof studentAge);
console.log(isFullTime);

studentName = "Bella";
console.log(studentName);

const employeeNames = [
	"Alex Johnson",
	"Mia Davis",
	"Noah Wilson",
	"Ava Martinez",
	"Ethan Brown",
	"Sophia Taylor",
	"Liam Anderson",
	"Isabella Thomas",
	"Mason Jackson",
	"Charlotte White"
];

console.log(employeeNames);

//set the first employee name to Jane and last employee name to Joe
employeeNames[0] = "Jane";
employeeNames[employeeNames.length - 1] = "Joe";
console.log(employeeNames);

let employeeAges = [28, 32, 25, 30, 27, 29, 31, 26, 33, 24];
//write a program to find the min and max numbers. do not use any built in sort functions
if (employeeAges.length === 0) {
	console.log("No employee ages available.");
} else {
	let minAge = employeeAges[0];
	let maxAge = employeeAges[0];

	for (let i = 1; i < employeeAges.length; i++) {
		if (employeeAges[i] < minAge) {
			minAge = employeeAges[i];
		}
		if (employeeAges[i] > maxAge) {
			maxAge = employeeAges[i];
		}
	}

	console.log("Minimum age:", minAge);
	console.log("Maximum age:", maxAge);
}