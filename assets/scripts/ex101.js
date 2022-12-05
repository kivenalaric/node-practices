function validateAddress(email) {
  let validation = "@";
  for (let i = 0; i < email.length; i++) {
    if (email[i] = validation) {
      return `nice email address ${email}`
    } else {
      return `wrong email address`
    }
  }
  return email;
}

const email1 = "jjhihi@gmail.com";
console.log(validateAddress(email1));
