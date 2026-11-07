const test = require("node:test");
const assert = require("node:assert");

test("Application should pass the basic test", () => {
    assert.strictEqual(1 + 1, 2);
});