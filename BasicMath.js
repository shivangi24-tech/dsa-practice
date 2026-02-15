// A class containing basic mathematical operations on numbers
class BasicMath {
  countDigit(n) {
    let i = 0;
    while (n > 0) {
      i++;
      n = Math.floor(n / 10);
    }
    return i;
  }

  reverseNumber(n) {
    let s = 0;
    for (; n > 0; n = Math.floor(n / 10)) {
      const digit = n % 10;
      s = s * 10 + digit;
    }
    return s;
  }
}

// Example usage:
const math = new BasicMath();

// Example: Counting digits and reversing a number
const number = 12345;
console.log(`The number of digits in ${number} is:`, math.countDigit(number));
console.log(`The reverse of ${number} is:`, math.reverseNumber(number));
