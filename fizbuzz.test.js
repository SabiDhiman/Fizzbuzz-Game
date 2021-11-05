const {fizzBuzz} = require('./fizzbuzz');

describe('Fizz tests', () => {
    // Write your tests for the "fizz" values here
    test("fizzbuzz 6", () => {
        expect(fizzBuzz(6)).toBe("fizz");
      })
});

describe('Buzz tests', () => {
    test("fizzbuzz 15", () => {
        expect(fizzBuzz(15)).not.toBe("buzz")
    })
})

describe('FizzBuzz tests', () => {

})

describe('Regs tests', () => {

})