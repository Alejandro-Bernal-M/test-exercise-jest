function capitalize(string){
  if (typeof string === 'string' ) {
    const capitalizedString= string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
  } 
  return ('Not a string')
}

console.log(capitalize('alejandro'));
console.log(capitalize(123));
module.exports = capitalize;