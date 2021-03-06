'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dataurijs = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
    custom_options: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom_options');
        var expected = grunt.file.read('test/expected/custom_options');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        test.done();
    },
    custom_options_u: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/custom_options_u');
        var expected = grunt.file.read('test/expected/custom_options_u');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        test.done();
    },
    destdir: function(test){
        test.expect(3);
        var actual = grunt.file.read('tmp/image.js');
        var expected = grunt.file.read('test/expected/image.js');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        actual = grunt.file.read('tmp/test.js');
        expected = grunt.file.read('test/expected/test.js');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        actual = grunt.file.read('tmp/testing.js');
        expected = grunt.file.read('test/expected/testing.js');
        test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

        test.done();
    }
};
