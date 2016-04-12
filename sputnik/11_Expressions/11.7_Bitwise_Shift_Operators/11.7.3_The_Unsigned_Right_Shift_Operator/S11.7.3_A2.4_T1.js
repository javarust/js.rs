// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.3_A2.4_T1;
 * @section: 11.7.3;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with "=";
*/

//CHECK#1
var x = 0; 
if ((x = 1) >>> x !== 0) {
  $ERROR('#1: var x = 0; (x = 1) >>> x === 0. Actual: ' + ((x = 1) >>> x));
}

//CHECK#2
var x = -4; 
if (x >>> (x = 1) !== 2147483646) {
  $ERROR('#2: var x = -4; x >>> (x = 1) === 2147483646. Actual: ' + (x >>> (x = 1)));
}

