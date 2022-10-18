const isValidLength = (phoneNumber) => {
    // const validLength = 11;
    if (phoneNumber.length === 11) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = isValidLength;

// check how to call the function