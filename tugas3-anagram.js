var isAnagram = function(test, original) {
    let first = test.toLowerCase().split("").sort().join("");
    let second = original.toLowerCase().split("").sort().join("")
    
      if (first === second) {
        return true;
      } else {
        return false
      }
  };
  console.log(isAnagram)