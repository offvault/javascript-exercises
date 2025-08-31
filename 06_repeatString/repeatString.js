const repeatString = function(string, num) {
    if (num < 0) {
  return 'ERROR';
}
let repeated = '';
for (let i = 0; i < num; i++) {
repeated = repeated + string }
return repeated;
};
repeatString('WoW', 10)
// Do not edit below this line
module.exports = repeatString;

/* 3rd TEST RUN

offvault@Odintu:~/repos/javascript-exercises/06_repeatString$ npm test repeatString.spec.j

> javascript-exercises@1.0.0 test
> jest repeatString.spec.j

 PASS  06_repeatString/repeatString.spec.js
  repeatString
    ✓ repeats the string (3 ms)
    ✓ repeats the string many times (1 ms)
    ✓ repeats the string 1 time (1 ms)
    ✓ repeats the string 0 times (1 ms)
    ✓ does not use the built-in String repeat method (2 ms)
    ✓ returns ERROR with negative numbers (2 ms)
    ✓ repeats the string a random amount of times (1 ms)
    ✓ works with blank strings (1 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        0.332 s, estimated 1 s
Ran all test suites matching /repeatString.spec.j/i.
offvault@Odintu:~/repos/javascript-exercises/06_repeatString$ 

*/