function validatePIN (pin) {

   let matched = /^\d{4}\b|\b\d{6}\b$/m;
   return matched.test(pin)

  }
  console.log(validatePIN('123467'))