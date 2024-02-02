function isPalindrome(word) {
  // Write your algorithm here

  //* set constant of starting letter and last letter
  let firstLetter = 0;
  let lastLetter = word.length-1;

  //* check if each letter equals to one another
  while (firstLetter < lastLetter){
    if (word[firstLetter] != word[lastLetter]){
      //* if the words do not match one another, it will return false as it is not a palindrome
      return false;
    }
    //* move along the word char to check
    firstLetter++;
    lastLetter--;
  }
  //* if the two letter match one another, return true
  return true;
}

/* 
  Add your pseudocode here
    initialize by putting two constants that holds two different char of letter

    iterate over each char in the input word
      if first letter is not equal to last letter
        return result of false
      
      move along the char of the word
    if first letter is equal to last letter
      return result of true
*/

/*
  Add written explanation of your solution here
  Since we want to find if both letter grabbed from opposite side of the word character matches, we must
  go through the entire char of the word. If all letters match as we go throughout the chars, return true.
  If it does not equal, return false.
  
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
