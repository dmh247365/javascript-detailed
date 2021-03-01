function outer() {
  let counter = 0;
  function incrementCounter() {
    counter ++;
  }
  return incrementCounter;
}

let myNewFunction = outer();



console.log(myNewFunction());
console.log(myNewFunction());

