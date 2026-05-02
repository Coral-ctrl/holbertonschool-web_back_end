export default function signUpUser(firstName, lastName) {
    // { firstName, lastName } is equivalent to { firstName: firstName, lastName: lastName } 
    // when the variable name matches the key name, keeping the code concise
    return Promise.resolve({ firstName, lastName });
  }
  