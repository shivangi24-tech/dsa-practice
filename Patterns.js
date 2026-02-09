/**
 * Pattern Printing Solution Class
 * Contains various pattern printing methods with examples
 */
class Solution {
  /**
   * Pattern 1: Rectangle of stars
   * Output (n=4):
   * ****
   * ****
   * ****
   * ****
   */
  pattern1(n) {
    for (let i = 1; i <= n; i++) {
      let s = "";
      for (let j = 1; j <= n; j++) {
        s += "*";
      }
      console.log(s);
    }
  }

  /**
   * Pattern 2: Right triangle of stars
   * Output (n=4):
   * *
   * **
   * ***
   * ****
   */
  pattern2(n) {
    let s = "";
    for (let j = 1; j <= n; j++) {
      console.log((s += "*"));
    }
  }

  /**
   * Pattern 3: Increasing number sequence
   * Output (n=5):
   * 1
   * 12
   * 123
   * 1234
   * 12345
   */
  pattern3(n) {
    let s = "";
    for (let i = 1; i <= n; i++) {
      console.log((s += i));
    }
  }

  /**
   * Pattern 4: Repeated numbers
   * Output (n=4):
   * 1
   * 22
   * 333
   * 4444
   */
  pattern4(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i.toString().repeat(i)); // repeat method repeats the string for given number of times
    }
  }

  /**
   * Pattern 5: Inverted right triangle of stars
   * Output (n=4):
   * ****
   * ***
   * **
   * *
   */
  pattern5(n) {
    for (let i = n; i > 0; i--) {
      let s = "*";
      console.log(s.repeat(i)); // repeat method repeats the string for given number of times
    }
  }

  /**
   * Pattern 6: Inverted number sequence
   * Output (n=5):
   * 12345
   * 1234
   * 123
   * 12
   * 1
   */
  pattern6(n) {
    for (let i = n; i > 0; i--) {
      let s = "";
      for (let j = 1; j <= i; j++) {
        s += j;
      }
      console.log(s);
    }
  }

  /**
  * Pattern 7: Half Pyramid
  * Output (n=4):
  *   *
  *  ***
 *  *****
 * *******
 */
 pattern7(n) {
    for (let i=1; i<=n; i++){
      let s = " "
      s+=s.repeat(n-i)
      s+=('*').repeat(2*i-1)
      console.log(s)
    }
  }
}

// ============================================
// Demo Usage
// ============================================
const solution = new Solution();

console.log("Pattern 1 (n=4):");
solution.pattern1(4);

console.log("\nPattern 2 (n=4):");
solution.pattern2(4);

console.log("\nPattern 3 (n=5):");
solution.pattern3(5);

console.log("\nPattern 4 (n=4):");
solution.pattern4(4);

console.log("\nPattern 5 (n=4):");
solution.pattern5(4);

console.log("\nPattern 6 (n=5):");
solution.pattern6(5);

