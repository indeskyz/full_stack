var utils = require("../app/utils");
var assert = require("chai").assert;

describe("pow", () => {
    function makeTest(x) {
        let expected = x * x * x;

        it(`${x} in the power 3 is ${expected}`, () => {
            assert.equal(utils.pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

});
