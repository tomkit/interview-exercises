// substring vs subsequence
// http://en.wikipedia.org/wiki/Subsequence#Substring_vs._subsequence

// 7
var string1 = 'hellomylove';
var string2 = 'jellomymom';

// 4
var string3 = 'zahivl';
var string4 = 'zchill';

function LCS(x, y) {
    if(x.length === 0 || y.length === 0) {
        return 0;
    }
    
    var subsetX = x.slice(0,-1);    
    var subsetY = y.slice(0,-1);
//    console.log(subsetX);
    
    if(x[x.length - 1] === y[y.length - 1]) {
        return LCS(subsetX, subsetY) + 1;
    } else {
        return Math.max(LCS(subsetX, y), LCS(x, subsetY));
    }
}

console.log(LCS(string3, string4));

exports.LCS = LCS;