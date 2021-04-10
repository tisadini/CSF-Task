// describe("Basic Tests", function(){
//     it("should return the minimum sum", function(){
//       Test.assertEquals(minSum([5,4,2,3]), 22);
//       Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
//       Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
//     });
//   });


function minSum(arr) {
    let sumNum = 0; //menampung hasil penjumlahan akhir
    let hasil = []; //menampung hasil sorting
    hasil = arr.sort((min, max) =>
    min - max //dari nilai kecil-besar
    )
    // untuk mengalikan dan menjumlahkan hasil perkalian.
    //condition setengah array karena index dibagi dua, dikalikan dan ditambahkan
    // hasil.length-1 -i => index terakhir dikurangi dengan i. contoh: jika i = 2, maka dari index terakhir diambil nilai dari index kedua dari belakang. Note array dimulai dari index 0.
    for (i=0; i<arr.length/2; i++) {
        sumNum += hasil[i] * hasil[hasil.length-1 - i]
    }
    return sumNum
   }
   console.log(minSum([5,4,2,3]), 22);
   console.log(minSum([12,6,10,26,3,24]), 342);
   console.log(minSum([9,2,8,7,5,4,0,6]), 74);
   