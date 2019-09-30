//task 1
function checkPalindrome(originStr) {
    if (typeof originStr !== "string") {
        console.error("Incorrect type");
        return false;
    }
    var reverseStr = originStr
        .split("")
        .reverse()
        .join("");
    if (originStr !== reverseStr) {
        return false;
    }
    return true;
}
console.log(checkPalindrome("nan"));
//task 2
function getFibonacci(userNum) {
    if (typeof userNum !== "number" || userNum <= 0) {
        console.error("Incorrect input");
        return [];
    }
    var fibArr = [0, 1];
    var fibNumber = 0;
    while (fibNumber <= userNum - fibArr[fibArr.length - 1]) {
        fibNumber = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(fibNumber);
        console.log(fibNumber);
    }
    return fibArr;
}
console.log(getFibonacci(22));
