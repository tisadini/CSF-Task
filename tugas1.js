// 1223334444333221 
// #22333444433322#
// ###3334444333###
// ######4444######
//--------------------------
// 11112222333344444444333221
// 11112222333344444444333221
// 11112222333344444444333221
// 11112222333344444444333221

function cetak(num) {
  for(h = 1; h<=num; h++) {  
    let data = ''
      for (let i =1; i<=num; i++) 
      {
        for (let elsa = 1; elsa<=i; elsa++){
          if(h>i) {
            data = data + '#'
          } else {
            data = data + i
          }
        }
      }
      for (let x=num; x>=1; x--) {
        for(let choki=x; choki>=1; choki--){
          if(h>x) {
            data+="#"
          } else {
            data += x
          }
        }
      }
    console.log(data)

  }
}


cetak(4)
