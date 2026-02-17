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

   isPalindrome(n) {
      let s = 0
      for (let num = n; num > 0; num = Math.floor(num / 10)) {
         const digit = num % 10
         s = s * 10 + digit
      }
      return s === n
  }
  GCD(n1, n2) {
        const smaller = n1 > n2 ? n2 : n1
        let gcd = 1
        for (let i = 1; i <= smaller; i++) {
            if (n1 % i === 0 && n2 % i === 0) {
                gcd = i
            }
        }
        return gcd
        // Optimized Solution
              // while(n2 !== 0) {
             //    let temp = n2
             //     n2 = n1 % n2
            //     n1 = temp
           // }
          // return n1 
    }
    isArmstrong(n) {
        let digitCount = 0
        let numArr = []
        let newNum = 0
        for (let num = n; num > 0; num = Math.floor(num / 10)) {
            numArr.push(num % 10)
            digitCount++
        }
        for (let i = 0; i < numArr.length; i++) {
            newNum += Math.pow(numArr[i], digitCount)
        }
        return newNum === n
    }
}

// Example usage:
const math = new BasicMath();

// Example: Counting digits and reversing a number
const number = 12345;
console.log(`The number of digits in ${number} is:`, math.countDigit(number));
console.log(`The reverse of ${number} is:`, math.reverseNumber(number));
console.log(`The number ${number} is:`, math.isPalindrome(number));


