const fizzBuzz = n => {
  // feel free to change this into a function :)
  for (var num = n; num <= 100; num++) {
    switch (true) {
        case (num % 3 === 0 && num % 5 === 0):
            return 'FizzBuzz';
            console.log('FizzBuzz')
            break;

        case (num % 3 === 0):
            return 'Fizz';
            console.log('Fizz')
            break;

        case (num % 5 === 0):
            return 'Buzz';
            console.log('Buzz')
            break;

        default:
            return num;
            console.log('num')
            break;
    }
  }
};
