/*
 * test-basic-test.js: Basic tests for the hook.io module
 *
 * (C) 2011 Marak Squires, Charlie Robbins
 * MIT LICENCE
 *
 */

var vows = require('vows'),
    assert = require('assert'),
    Hook = require('../../lib/hookio').Hook,
    macros = require('../helpers/macros');

vows.describe('hook.io/spawn/construction').addBatch({
  "When hook is constructed with no arguments": {
    topic: function() {
      var hook = new Hook();

      this.callback();
    },
    "it should succeed": function() { }
  },
  "When hook is constructed with no config": {
    topic: function() {
      var hook = new Hook({
        noConfig: true
      });

      this.callback();
    },
    "it should succeed": function() { }
  }
}).export(module);
