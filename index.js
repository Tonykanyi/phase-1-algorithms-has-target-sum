function hasTargetSum(array, target) {
  // Write your algorithm here
    // Create a set to store the numbers we have seen
    const seenNumbers = new Set();

    // Iterate through the array
    for (const number of array) {
      // Calculate the complement
      const complement = target - number;
  
      // Check if the complement is in the set
      if (seenNumbers.has(complement)) {
        return true;
      }
  
      // Add the current number to the set
      seenNumbers.add(number);
    }
  
    // If no pairs are found, return false
    return false;
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
