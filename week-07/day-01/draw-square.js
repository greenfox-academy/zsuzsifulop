'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

var i;
var j;
var string ="";

for (i = 0; i < lineCount; i++){
    for (j = 0; j < lineCount; j++) {
        if (i === 0 || j === 0 || j === lineCount-1 || i ===lineCount-1){
            string +="%";
        } else {
            string += " ";
        }
    
    }
    console.log(string);
    string = "";
}
