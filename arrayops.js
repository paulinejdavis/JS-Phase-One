// const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// // 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
// const isShorterThanThree = (name) => {
//   if (name.length < 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

// 2. Create a new array of all names uppercased by applying
// the `getUppercased` function to all elements in the `names` array.

// const getUppercased = (name) => {
//   return name.toUpperCase();
// }

// const uppercasedNames = names.map(getUppercased);

// 
//  const phoneNumbers = [
//     '1763687364',
//     '4763687363',
//     '7867867862',
//     'aaaaaaaabbbbbbbcccccdddddddd' 
//   ];

//   const checkLength = (phoneNumber) => {
//     if (phoneNumber.length <= 10) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   checkLength('1763687364')
// phoneNumbers.filter((phoneNumber) => {
//     return false;
// });

// const filterLongNumbers = (phoneNumbers) => {
//     return phoneNumbers.filter(checkLength);
// }
  
// filterLongNumbers(phoneNumbers)
//   > filterLongNumbers(numbers);
//   [ '1763687364', '4763687363', '7867867862' ]
  
//   > filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
//   [ '4763687363', '7867867862' ]
  
//   > filterLongNumbers([])
//   [ ]

//test
// const numbers = [1, 2, 3, 4];

// numbers.map((number) => {
//     return 'a';
// });

// numbers.map((number) => {
//     return number;
// })

// numbers.map((number) => {
//     return number + 1;
// })

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = (nameList) => {
//     return nameList.map((name) => {
//     return 'Hi ' + name + '! 50% off our best candies for you today!';
//     });
// }

// generateMessages(names);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 50% off our best candies for you today!',
//   'Hi Josh! 50% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 50% off our best candies for you today!'
// ]

