'use strict';

var a = 3;
// make it bigger by 10
a += 10;
console.log(a);

var b = 100;
// make it smaller by 7
b -= 7;
console.log(b);

var c = 44;
// double c's value
c *= 2;
console.log(c);

var d = 125;
// divide d's value by 5
d /= 5;
console.log(d);

var e = 8;
// what's the cube of e's value?
e *= 3;
console.log(e);

var f1 = 123;
var f2 = 345;
var bool3 = false;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    bool3 = true;
    console.log(bool3);
}

var g1 = 350;
var g2 = 200;
var bool = true;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if ((g2 *= 2) > g1) {
    bool = false;
    console.log(bool);
}

var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
if ((h % 11) === 0) {
    console.log("Hey, 11 is good for me!");
}

var i1 = 10;
var i2 = 3;
var bool2 = false;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

if ((i1 > i2 * i2 && i1 < i2 * i2 * i2)) {
    bool2 = true;
    console.log(bool2);
}

var j = 1521;
var bool3 = false;
// tell if j is dividable by 3 or 5 (as a boolean)
if (j % 3 === 0 || j % 5 === 0) {
    bool3 = true;
    console.log(bool3);
}

var k = 'Apple';
var i = 1;
// fill the k variable with its content 4 times
for (i; i < 4; i++) {
    k += 'Apple';
}
console.log(k);