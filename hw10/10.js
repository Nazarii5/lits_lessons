var print = function (text) {
  console.log("wow " + text);
};  


var doPrintSomething= function(printer) {
  printer("some");
}

doPrintSomething(print);


//Rivniannia1

var rivn1 = function (a, b,c) {
  var result1 = a * b ^ 2 - c;
return result1
};

var task1 = rivn1(2, 18,5);
console.log("you have " + task1)

var task2 = rivn1(22, 4, 2);
console.log("you have " + task2)



//Rivniannia2
var rivn2 = function (a,b,c) {
  var descr = b * b - 4  * a * c;
  console.log("Descriminant= " + descr);
  if (descr < 0) {
    console.log("Коренів немає")
    } else  {
    var x1 = (-b + Math.sqrt(descr)) / (2 * a);
    var x2 = (-b - Math.sqrt(descr)) / (2 * a);
  }
  
  return[x1,x2]
}

var result1 = rivn2(2, 3, 10)


var result2 = rivn2(1, 8, 3)
console.log("roots: " + result2);





var Fib = function (n) {
  if (n < 3) { return n }
  
  else {
    return (Fib(n - 1) + Fib(n - 2))
  }
}
  console.log(Fib(1));
console.log(Fib(6));
console.log(Fib(12));
console.log(Fib(17));






