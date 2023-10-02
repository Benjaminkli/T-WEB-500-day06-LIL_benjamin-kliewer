export function fizzBuzz(num) {

    if (typeof num !== 'number' || isNaN(num) || num <= 0){

        console.log("Invalid input");
        return;
    }
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result+= 'Buzz';
        } else {
            result+= i;
        }

        if (i < num) {

            result += ', '
        }
    }

    console.log(result);

}
