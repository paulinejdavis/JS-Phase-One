// const person = {
//     name: 'Maxine',
//     age: 32,
//     address: 'London, E1 123'
//   };
  
  // both ways can be used to access an object's property:
//   console.log(person.name);
//   console.log(person['name']);

  //person.address.city
  //person.hobbies[1]

  const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,
  
    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
      return 100;
    }
  };
  
  bankAccount.getBalance();

  const cohort = {
    name: 'May2022',
    id: 1234,
    studentNames: ['Wanda', 'Tammy', 'Colin']
  };

  cohort: () => {
    console.log('cohort.name, studentNames.length, student in cohort.')
  }

