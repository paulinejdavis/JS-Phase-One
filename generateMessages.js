// const generateMessages = (names) => {
//     return names.map((name) => {
//         // return 'Hi ' + name + '! 50% off our best candies for you today'
//         return `Hi ${name}! 50% off our best candies for you today`;

//     });
// }

// module.exports = generateMessages;

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];
  
  

const generateMessages = namesAndDiscounts.map(namesAndDiscount => `Hi ${namesAndDiscount.name}! ${namesAndDiscount.discount}% off our best candies for you today!`)
      
module.exports = generateMessages;

//     generateMessages(namesAndDiscounts);
//   [
//     'Hi Anna! 50% off our best candies for you today!',
//     'Hi Laura! 40% off our best candies for you today!',
//     'Hi Josh! 30% off our best candies for you today!',
//     'Hi Min! 50% off our best candies for you today!',
//     'Hi Karla! 60% off our best candies for you today!'
//   ]