const reverseString = function(string) {
return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;

/*
offvault@Odintu:~/repos/javascript-exercises/07_reverseString$ npm test reverseString.spec.js

> javascript-exercises@1.0.0 test
> jest reverseString.spec.js

 PASS  07_reverseString/reverseString.spec.js
  reverseString
    ✓ reverses single word (2 ms)
    ✓ reverses multiple words
    ✓ works with numbers and punctuation
    ✓ works with blank strings (5 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.284 s
Ran all test suites matching /reverseString.spec.js/i.
offvault@Odintu:~/repos/javascript-exercises/07_reverseString$ 
*/