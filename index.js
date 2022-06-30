function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) return false;
  }
  return true;






}

/* 
  Add your pseudocode here
   If the first letter is the same as last letter, and the second letter is the same
  as the second to last letter, etc. until we reach the middle, return true.
  iterate from the beginning to the middle
    check each letter to the correponding letter from the end
      if any letters don't match, return false
*/

/*
  Add written explanation of your solution here
The code checks if the first word is the same as the last one, 
and if the same happens to the second with second last and third to third last
if they are, it returns the value 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
