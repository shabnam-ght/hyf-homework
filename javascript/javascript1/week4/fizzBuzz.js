function fizzBuzzArray(fizzNumber, buzzNumber) {
  let arrayResult = [];
  for (let i = 1; i <= 100; i++) {
    if (i % fizzNumber === 0 && i % buzzNumber === 0) {
      arrayResult.push("fizzBuzz");
    } else if (i % fizzNumber === 0) {
      arrayResult.push("fizz");
    } else if (i % buzzNumber === 0) {
      arrayResult.push("buzz");
    } else {
      arrayResult.push(i);
    }
  }

  return arrayResult;
}
const arrayResult = fizzBuzzArray(3, 5);
console.log(arrayResult);
