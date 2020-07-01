//  Pairing with @Oluwatobii

const transpose = function (matrix) {
    // Put your solution here
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][i]);
      }
      newMatrix.push(col);
    }
    return newMatrix;
  };


const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) {
          return true
      } 
  }
  const verticalLetters = transpose(letters);
  const verticalJoin = verticalLetters.map(ls => ls.join(''))
  for (l of verticalJoin) {
    if (l.includes(word)) {
        return true
    } 
  }
  return false
}

module.exports = wordSearch