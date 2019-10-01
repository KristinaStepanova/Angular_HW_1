//task 1
function checkPalindrome(originStr: string): boolean {
  if (typeof originStr !== "string") {
    console.error("Incorrect type");
    return false;
  }
  let reverseStr: string = originStr
    .split("")
    .reverse()
    .join("");
  return originStr === reverseStr;
}

console.log(checkPalindrome("nan"));

//task 2
function getFibonacci(userNum: number): Array<number> {
  if (typeof userNum !== "number" || userNum <= 0) {
    console.error("Incorrect input");
    return [];
  }

  let fibArr: Array<number> = [0, 1];

  let fibNumber: number = 0;

  while (fibNumber < userNum) {
    let arrLength: number = fibArr.length;
    fibNumber = fibArr[arrLength - 1] + fibArr[arrLength - 2];
    fibArr.push(fibNumber);
  }

  return fibArr.slice(0, -1);
}

console.log(getFibonacci(90));
