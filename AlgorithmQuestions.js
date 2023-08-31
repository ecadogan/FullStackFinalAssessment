
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 

const isPalindrome = (word) => {
  
    // We need to reverse the string and then compare it
  
    // This is O(n) as we ‹ over each letter once.
    let reversedString = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedString += word[i];
    }
  
    // Check if the strings match and return the result
    return reversedString === word;
  }
  
  // Could have used built in javascript functions like split('') to create and array
  // and then reverse() to reverse it, but would have been unable to calculate the big O value.
  // These would have possibly been faster as the browser/node implements the algorithms for us.
  
  // This function is easily readable, but we could have written some code to look at the first and last
  // characters of the string, compare them, and if they match, look at the next two characters. If at any point we found two that didn't match
  // we could return a false, and avoid checking the rest, so returning a value of less than O(n)
  
  console.log(isPalindrome("abcdcba")) // TRUE 
  console.log(isPalindrome("aba")) // TRUE 
  console.log(isPalindrome("c")) // TRUE
  console.log(isPalindrome("radar")) // TRUE
  console.log(isPalindrome("level")) // TRUE 
  console.log(isPalindrome("pencil")) // FALSE
  console.log(isPalindrome("ark")) // FALSE
  console.log(isPalindrome("aa")) // TRUE
  
  
  
  // TASK 2
  
  const isMissing = (arrayInput) => {

    // Get the array in order
    let sorted = arrayInput.sort();

    // Check to see if anything is missing/invalid
    return compareNumbers(sorted);
}
  
  /**
   * Finds the missing numbers.
   * Checks each number in order to see if it's valid
   * Then compares it to the previous number to see if it's correct
   * Would have a complexity of O(n) since we have to loop through each number.
   * Assuming it finds an invalid number, it'll end the loop before going through the rest.
   * @param {*} numbers 
   * @returns 
   */
  function compareNumbers(numbers) {
  
    let previousNumber;
    for(let i = 0; i < numbers.length; i++) {
  
      // Check for Not a Number
      if(isNaN(numbers[i])) {
        return 'Invalid input, non numeric number detected';
      }
  
      // Check for negative
      if(numbers[i] < 0) {
        return 'Invalid input, negative number detected';
      }
  
      // Check for a previous numbers (none on the first turn)
      if(previousNumber){
  
        // Set the expected valid to previous + 1
        let expected = previousNumber+1;
  
        if(numbers[i] != expected) {
          return 'Missing=' + expected;
        }
      }
  
      // Set the previous number to the current one
      previousNumber = numbers[i];
  
    }
  
    // All good, nothing is missing
    return 'Nothing is missing'
  
  }
  
  
  console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
  console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
  console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
  console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
  console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing