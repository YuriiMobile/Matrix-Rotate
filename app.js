
// Make the matrix fliped one
let fliped_matrix = matrix => {
  for (var i = 0; i < matrix.length; i++)
  {
    for (var j = 0; j < i; j++)
    {
      var tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  return matrix;
}

// Make the matrix reversed one
let rotated_matrix = matrix => {
  return (fliped_matrix(matrix.reverse()));
}

console.log(rotated_matrix([[1,2,3],[4,5,6],[7,8,9]]));
