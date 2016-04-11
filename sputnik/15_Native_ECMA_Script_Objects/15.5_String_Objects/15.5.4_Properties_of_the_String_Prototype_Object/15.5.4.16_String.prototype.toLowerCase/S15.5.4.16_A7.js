// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A7;
* @section: 15.5.4.16, 13.2;
* @assertion: String.prototype.toLowerCase can't be used as constructor;
* @description: Checking if creating the String.prototype.toLowerCase object fails;
*/

var __FACTORY = String.prototype.toLowerCase;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: var __FACTORY = String.prototype.toLowerCase; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.1: var __FACTORY = String.prototype.toLowerCase; "__instance = new __FACTORY" throws a TypeError. Actual: ' + (e));  
  }
};

