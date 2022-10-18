const fizzBuzz = (number) => {
    //if number is positive return positive
    //if number is negative return negative
    //if zero return zero

    if (number % 15 == 0) {
        console.log('FizzBuzz');
    } else if (number % 3 ==  0) {
        console.log('Fizz');
    } else if (number % 5 ==  0) {
        console.log('Buzz');
    } else {
        console.log(number);
    }
}

module.exports = fizzBuzz;

//works but not in speechmarks