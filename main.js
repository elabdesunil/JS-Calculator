function calculator(word, num1, num2) {
  let calculation;
  switch (word) {
    case "add": {
      calculation = num1 + num2;
      break;
    }
    case "subtract": {
      if (num1 > num2) {
        calculation = num1 - num2;
      } else {
        calculation = num2 - num1;
      }
      break;
    }
    case "multiply": {
      calculation = num1 * num2;
      break;
    }
    case "divide": {
      if (num2 == 0) {
        console.log("The denominator cannot be zero. The answer is infinity");
        break;
      }
      calculation = num1 / num2;
      break;
    }
  }
  return calculation;
}

var answer = calculator("add", 4, 2);
console.log(answer); // 6
answer = calculator("subtract", 4, 2);
console.log(answer); // 2
answer = calculator("divide", 4, 2);
console.log(answer); // 2
answer = calculator("multiply", 4, 2);
console.log(answer); // 8
