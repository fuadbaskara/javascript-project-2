var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

// LEVEL 0
console.log("----------------------- lEVEL 0 -----------------------------");
names.forEach(function(element) {
  console.log(element);
});
// LEVEL 1
console.log("----------------------- lEVEL 1 -----------------------------");
let title = names.filter(name => name.indexOf("Mr.") != -1);
console.log(title);
// LEVEL 2
console.log("----------------------- lEVEL 2 -----------------------------");
let titleMr = names.filter(a => a.indexOf("Mr.") != -1);
console.log(titleMr);
console.log("----------------------- Male Gender -------------------------");
const genderMale = titleMr.map(x => x + " (male)");
console.log(genderMale);
genderMale.forEach(function(element) {
  console.log(element);
});
// female gender
console.log("---------------------- Female Gender ------------------------");
let titleMrs = names.filter(b => b.indexOf("Mrs.") != -1);
console.log(titleMrs);
const genderFemale = titleMrs.map(x => x + " (female)");
console.log(genderFemale);
genderFemale.forEach(function(element) {
  console.log(element);
});

var gender = [];

function addGender() {

  for (var i = 0; i < names.length; i++) {
    if (names[i].indexOf("Mr.") != -1) {
      gender.push(names[i] + (" (male)"));
    } else {
      gender.push(names[i] + (" (female)"));
    }
  }
  return gender.join("\n");
}
console.log(addGender());


// LEVEL 3
console.log("----------------------- lEVEL 3 -----------------------------");

function searchName(search) {
  let search_name = names.filter(name => name.indexOf(search) != -1);
  return search_name;
}
console.log(searchName("Joseph"));
searchName("P").forEach(function(element) {
  console.log(element);
});
console.log("----------------------- lEVEL 4 -----------------------------");
let x = [];
let mixedArray = x.concat(genderMale, genderFemale);
console.log(mixedArray);
mixedArray.forEach(function(element) {
  console.log(element);
});
console.log("----------------------- lEVEL 5 -----------------------------");
var names2 = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

// let number = [];
// for ( var counter = 0; counter < names2.length; counter++) {
// if ( typeof names2[counter] == "undefined") {
// names2.splice(counter, 1);
// counter--;
// }
// }
// console.log(number);

let number2 = [];
for (var counter = 0; counter < names2.length; counter++) {
  if (typeof names2[counter] == "string") {
    number2.push(names2[counter]);
  }
}
console.log(number2);
