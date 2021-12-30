let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

// Array1 length: 4
// Array2 length: 6
// Array3 length: 0
// Array4 length: 3
// Array5 length: 101
