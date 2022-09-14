// const { template } = require('@babel/core')

// function getMaxLengthString(arrayOfString) {
//   if(arrayOfString === null || arrayOfString === undefined){
//     return undefined;
//   }
//   let a = [...arrayOfString]
//   let max = 0
//   let b
//   for(let i = 0; i < a.length; i++){
//     if(a[i].length > max){
//       b = []
//       max = a[i].length 
//     }
//     if(a[i].length === max){
//       b.push(a[i])
//     }
//   }
//   return b;
// }

// module.exports = getMaxLengthString


const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
    if(arrayOfString == null || arrayOfString == undefined){
      return undefined
    }else{
    array = arrayOfString;
    let max = array[0].length;
    array.map((v) => max = Math.max(max, v.length));
    result = array.filter((v) => v.length == max);
    return result;
  }
  }
  module.exports = getMaxLengthString



