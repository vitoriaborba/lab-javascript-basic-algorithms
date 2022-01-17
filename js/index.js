// Iteration 1: Names and Input
let hacker1 = 'Vitoria';
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = 'Luciana';
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver  ${hacker1.length} has the longest name, it has characters`);
  } else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
// 3.1
let driverName = ''
for (letter of hacker1) {
  driverName += letter.toUpperCase() + " "
}
// 3.2
let navigatorName = ""
for (i = hacker2.length -1; i >= 0; i-- ) {
  navigatorName += hacker2[i];
}
//3.3
if (hacker1.localeCompare(hacker2) === 1) { 
    console.log("The driver's name goes first.");
      } else if (hacker1.localeCompare(hacker2) === -1) {
      console.log("Yo, the navigator goes first definitely.");
    } else if (hacker1.localeCompare(hacker2)=== 0) {
      console.log ("What?! You both have the same name?")
    }
