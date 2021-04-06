// describe("nbYear",function() {
//     it("Basic tests",function() {    
//         Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//     //     Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//     //     Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
//     })})

// function nbYear(p0, percent, aug, p) {
//     let year = 0
//     while (p0<p) {
//         p0 += p0 * percent/100 + aug;
//         year++
//     }
//       console.log(year)
// }
    
// nbYear(1500, 5, 100, 5000);

//----------------------------
function nbYear(p0, percent, aug, p) {
    let y = 0
    for (y; p0 < p; y++){
         p0 = p0 * (1 + percent / 100) + aug
    }
    return y

}
    
nbYear(1500, 5, 100, 5000);
