const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined;
  }
  let a = [...arrayOfString];
  let max = 0;
  let b,bb;
  for(let i = 0; i < a.length; i++){
    if(a[i].length > max){
      max = a[i].length 
      b = i
    }
    if(a[i].length === max){
      bb = i
    }
  }
  if(bb !== b){
    return arrayOfString = [a[b],a[bb]];
  }else {
    return arrayOfString = a[b];
  }
}

module.exports = getMaxLengthString
