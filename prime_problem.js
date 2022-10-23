function isNumberPrime(number){
    let isprime = true;

    for (let i = 2; i * i <= number; i++) {
      if (number % i == 0) {
        isprime = false;
        break;
      }
    }
    if ( isprime == true) {
      console.log(number + " is prime");
    }
    else {
      console.log(number + " is not prime");
    }
}

isNumberPrime(24);