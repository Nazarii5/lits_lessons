var countries  = [
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






var someMain = document.querySelector("main");

var divEle = document.createElement("div");
divEle.classList.add("some");

const someTextNode = document.createTextNode(
  
  ` country:
  name: "Ukraine", 
  language: "українська",
  properties: 1503,
  population: 126560,
  region: "Europe"
  

 `);
divEle.appendChild(someTextNode);


someMain.appendChild(divEle)




console.log("-------inner_HTML--------")

someMain.innerHTML = someMain.innerHTML + `<pre class="border">
<p >
Country:
    name: "Ukraine"
    language: "українська"
    properties: 1503
    population: 126560
    region: "Europe"
  
    </p>` + `<p>
    country:
      name: "UK",
      language: "English",
      properties: 123,
      population: "55634534 people",
      region: "Asia"
      </p>` +
    
    
  `<p>
    country:
      name: "Spain",
      language: "Spanish",
      properties: 234,
      population: "34534 people",
      region: "Europe"
    </p>` +
    
  `<p>
    country:
      name: "China",
      language: "Chines",
      properties: 24441,
      population: "13342342345 people",
      region:"Asia"
    </p>
    </pre>`;
  
const someBorder = document.querySelector(".border");

someBorder.style.display = "flex";
someBorder.style.border = "2px solid green";
someBorder.style.background = "yellow";
someBorder.style.padding="3px" ;
someBorder.style.fontFamily = "sans-serif";

