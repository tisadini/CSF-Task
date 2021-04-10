// const {assert} = require("chai");

// describe("Basic tests", function(){
//   it("Testing for balls: 1", function(){
//     assert.strictEqual(pyramid(1) , 1);
//   });  
//   it("Testing for balls: 4", function(){
//     assert.strictEqual(pyramid(4) , 2);
//   });
//   it("Testing for balls: 20", function(){
//     assert.strictEqual(pyramid(20) , 5);
//   });
//   it("Testing for balls: 100", function(){
//     assert.strictEqual(pyramid(100) , 13);
//   });
//   it("Testing for balls: 9999", function(){
//     assert.strictEqual(pyramid(9999) , 140);
//   });
// });

function pyramid(balls) {
 
    let hasil = 0
    while (balls > hasil) {
      balls -= (hasil+=1);
   
    }
    return hasil
    
  }
  
  console.log(pyramid(1) , 1);
  console.log(pyramid(4) , 2);
  console.log(pyramid(20) , 5);
  console.log(pyramid(100) , 13);
  console.log(pyramid(9999), 140)