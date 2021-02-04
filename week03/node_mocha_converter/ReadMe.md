npm install --save mocha chai
npm install --save request
npm install --save express

npm test

npx mocha --reporter spec

https://mochajs.org/#getting-started

https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

https://javascript.info/testing-mocha

Please note the assertion assert.isNaN: it checks for NaN.

There are other assertions in Chai as well, for instance:

assert.equal(value1, value2) – checks the equality value1 == value2.
assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
assert.isTrue(value) – checks that value === true
assert.isFalse(value) – checks that value === false