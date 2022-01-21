

var countries = [
  country1 = {
    name: "Ukraine",
    language: "українська",
    properties: 1503,
    population: 126560,
    region: "Europe"
  },

country2 = {
  name: "UK",
  language: "English",
  properties: 123,
  population: "55634534 people",
  region: "Asia"
},

country3 = {
  name: "Spain",
  language: "Spanish",
  properties: 234,
  population: "34534 people",
  region: "Europe"
},

country4 = {
  name: "China",
  language: "Chines",
  properties: 24441,
  population: "13342342345 people",
  region:"Asia"
}];

console.log(countries);

console.log('---------Filter----------');

var someCountryA = countries.filter(function (item) {
  return item.region === "Asia"
});
console.log(someCountryA);

var someCountryE = countries.filter(function (item) {
  return item.region === "Europe"
});
console.log(someCountryE);

console.log('---------For_Each----------');

var someEach = (function (countries) {
  console.log("This is : " + countries.name)
  
});

countries.forEach(someEach);


var someEach = (function (countries) {
  console.log("Language is : " + countries.language)
  
});

countries.forEach(someEach);




console.log('---------For_Each_from_lesson----------');

var arrayWithSomeNumbers = [1, 2, 3, 4, 5, 6];
var handleItem = function (item) {
  console.log("The number is: " + item);
};
arrayWithSomeNumbers.forEach(handleItem);

console.log('---------Map----------');


var someMap = function (countries) {
  return countries.name;
  
}
var someMap2 = countries.map(someMap);
console.log(someMap2.toString());


console.log('---------Push_Pop----------');

countries.pop();
console.log(countries);

countries.push(
  {
    name: "China",
    language: "Chines",
    properties: 24441,
    population: "13342342345 people",
    region:"Asia"
  }
);
console.log(countries);