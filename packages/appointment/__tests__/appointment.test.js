'use strict';

const appointment = require('..');
const assert = require('assert').strict;

assert.strictEqual(appointment(), 'Hello from appointment');
console.info("appointment tests passed");
