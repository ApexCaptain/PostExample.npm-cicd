export default {
  add: (numA: number, numB: number) => {
    if (isNaN(numA) || isNaN(numB))
      throw new Error("Both arguments must be number.");
    else return numA + numB;
  },
  subtract: (numA: number, numB: number) => {
    if (isNaN(numA) || isNaN(numB))
      throw new Error("Both arguments must be number.");
    else return numA - numB;
  },
  sum: (...numbers: number[]) => {
    return numbers.reduce((acc, eachNumber) => {
      if (isNaN(eachNumber)) throw new Error(`${eachNumber} is not a number.`);
      return acc + eachNumber;
    }, 0);
  },
};
