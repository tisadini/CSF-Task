function persistence(num) {
    let arr = num.toString().split('');
    let result = 1;
    var newData;
    
    while (arr.length > 1) {
      newData = arr.reduce(function(a, b) {
        return a * b;
      });
      result++;
      arr = newData.toString().split("");
    }
    return result;
  }

 console.log(persistence(39),3);
 console.log(persistence(25),2);
 console.log(persistence(999),4);
 console.log(persistence(4),0);