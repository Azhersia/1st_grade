
// let answer = prompt('type')
// let nmr = parseInt(answer)
// let nmr = parseFloat(answer)

// if (isNaN(nmr)) {
//   alert(answer, 'is a string')
// } else alert(nmr, ' is a number')



let input = prompt('skriv')

console.log(input, 'är en ' + getType(input))

function getType(str) {
  const intNum = parseInt(str)

  if (isNaN(intNum))
    return 'string';

  const floatNum = parseFloat(str);
  if (intNum === floatNum)
    return 'int'

  return 'float'


}

// let input = prompt('skriv')

// let num = parseInt(input);
// if (isNaN(num)) {
//   console.log(input, 'is a string');
// }
// else {
//   let num2 = parseFloat(input);
//   if (num === num2) {
//     console.log(num, 'is a integer')
//   }
//   else {
//     console.log(num2, 'är en float (floating point number');
//   }
// }

