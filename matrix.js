function multiplication(A, B) {
  const m = A.length;
  const n = A[0].length;
  const p = B[0].length;

  if (n !== B.length) {
    throw new Error("Incompatible matrix dimensions");
  }

  const C = Array.from({ length: m }, () => Array(p).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12],
];

try {
  const result = multiplication(A, B);

  for (let row of result) {
    console.log(row.join(" "));
  }
} catch (error) {
  console.log(error.message);
}
