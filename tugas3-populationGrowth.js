// describe("nbYear",function() {
//     it("Basic tests",function() {    
//         Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//     //     Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//     //     Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
//     })})

function nbYear(p0, percent, aug, p) {
    let year = 0
    while (p0<p) {
        p0 += p0 * percent/100 + aug;
        year++
    }
      return year
}


    
console.log(nbYear(1500, 5, 100, 5000));
