// const names = ['Matthew', 'Mark', 'Luke', 'John'];
// const newNames = names.concat('Casey');

// console.log(names.length);
// console.log(names[1]);
// console.log(newNames);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach((numbers) => {
//     console.log(numbers);
// });
   
const iteratorFunction = (number) => {
    console.log(number);
    }

numbers.forEach(iteratorFunction);

let sum = 0;

numbers.forEach((number) => {
    sum += number
});

sum

const addToBatch = (array, number) => {
    if (array.length >= 5) {
      return array;
    }
  
    return array.concat(number);
  }

// > addToBatch([1], 3); 
// [ 1, 3 ]

// > addToBatch([1, 2, 3], 4); 
// [ 1, 2, 3, 4 ]

// > addToBatch([], 8); 
// [ 8 ]

// > addToBatch([1, 2, 3, 4, 5, 6], 7); 
// [ 1, 2, 3, 4, 5, 6 ]

// > addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]