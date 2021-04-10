function minSum(arr) {
    //looping the whole array
    for (let i = 0; i < arr.length; i++){
    // console.log("pertama",arr[i])
      //looping through the array/looping array yang sudah melalui looping
      //kalau j=0 maka akan dilooping keseluruhan arraynya sbanyak kondisi yang ditentukan. case ini sebanyak arr.length
      //j = i dimaksudkan untuk melanjutkan setelah menemukan angka terbesar.
      for (let j = i; j<arr.length; j++) {
      // console.log("kedua",arr[j])
        if (arr[i] < arr [j]) {
          //swapping to sort
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp  ; 
          // console.log("ketiga",temp)
        }   
    }
  }
    return arr;
}

console.log(minSum([9,2,8,7,5,4,0,6]))