/*

Implementation of the Binary Search Algorithm in JavaScript.

Search for a target value in a sorted array by repeatedly dividing the search interval in half. 
Returns either the index of the location in the array if found, or -1 if the array did not contain the targetValue.

*/

  var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    var i = 1;
    
    while(max >= min){
        guess = Math.floor((max + min)/ 2);
        if (array[guess] === targetValue){
            console.log("Número total de intentos: " + i);
            return guess;
        }
        else if(array[guess] < targetValue){
            min = guess + 1;
        }
        else{
            max = guess - 1;
        }
        
        i += 1;
        console.log(guess);
    }

    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

// Assuming Program.assertEqual is a custom function for testing
if (typeof Program !== 'undefined' && Program.assertEqual) {
    Program.assertEqual(doSearch(primes, 73), 20);
    Program.assertEqual(doSearch(primes, 19), 7);
    Program.assertEqual(doSearch(primes, 2), 0);
}
