module.exports = function check(str, bracketsConfig) {

  let array = []
  let [openBracket, closeBracket, equal] = [{}, {}, []]
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      equal.push(bracketsConfig[i][0]);
    }
    if (bracketsConfig[i][0] != equal) {
      openBracket[bracketsConfig[i][0].toString()] = bracketsConfig[i][1];
      closeBracket[bracketsConfig[i][1].toString()] = true;
    }
  }

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (equal.includes(char)) {
    if (array[array.length-1] === char) {
      array.pop();
    } else array.push(char);
  } else if (openBracket[char]) {
      array.push(char);
  } else {
    if (closeBracket[char]) {
      if (openBracket[array.pop()] !== char) return false
    }
  }
}
return array.length === 0;
}
