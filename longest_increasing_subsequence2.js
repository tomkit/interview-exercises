var sequence1 = [0, 1, -2, 4, 9, 11];
var sortedSequence1 = [-2, 0, 1, 4, 9, 11];

var LCS = require('./longest_common_subsequence.js').LCS;

console.log(LCS(sequence1, sortedSequence1));