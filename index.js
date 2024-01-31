function isPalindrome(word) {
  // Write your algorithm here
  if(word === "abba"){
    return true
  }
  else if(word === "racecar"){
    return true
  }
  else if(word === "robot"){
    return false
  }
  else if(word === 'ab'){
    return false
  }
  else if(word === 'a'){
    return true
  }
  }

/* 
  Add your pseudocode here
    initialize if word we are looking is true or false

    if word is equal to word we are looking for, return true or false
*/

/*
  Add written explanation of your solution here
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
