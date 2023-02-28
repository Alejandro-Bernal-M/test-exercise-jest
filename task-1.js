 function stringLength(string) {
  let str = string.length
  if(str < 1 || str > 10) {
    return ('Lengths conditions not fulfilled');
  } else {
    return str;
  }
  
 }
 console.log(stringLength('hello'))
 console.log(stringLength('hellohellohello'))

 module.exports = stringLength