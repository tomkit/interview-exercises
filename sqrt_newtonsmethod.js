// G = guess
// N = number

function sqrt(number) {
    var epsilon = 0.001;
    var guess = number;
    
    while(epsilon < Math.abs((guess*guess) - number)) { // |G^2 - N|
        guess = (guess + number/guess) / 2;             // (G + N/G) / 2
    }
    
    return guess;
}

console.log(sqrt(9));
console.log(sqrt(12));