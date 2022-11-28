//recursion
function countDown(number) {
  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(25);

//Closures
import { sumNumbers } from "../escopo";

const result = sumNumbers();

console.log(result);
