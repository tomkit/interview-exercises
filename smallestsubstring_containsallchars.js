var string1 = "this is a test string";
var string2 = "tist";

// possible: "this is a t"
// possible: "is is a test
// possible: "is a test"
// possible: "test stri"
// output: "t stri" [13, 18]

var hist1 = {};
var hist2 = {};

for(var i = 0; i < string2.length; i++) {
    if(!hist2[string2[i]]) {
        hist2[string2[i]] = 1;
    } else {
        hist2[string2[i]]++;
    }    
}

console.log(hist2);


var pos = {
    start : 0,
    end : 0
};

function moveForward(pos, part, incBy) {
    while(pos.end < string1.length && pos.start <= pos.end) {
        if(!hist1[string1[pos[part]]]) {
            hist1[string1[pos[part]]] = 1;
        } else {
            hist1[string1[pos[part]]] += incBy;
        }
        
        pos[part]++;
        
        if(incBy === 1 && containsAllHist2(hist1)) {            
            break;
        } else if(incBy === -1 && !containsAllHist2(hist1)) {
            pos[part]--;
            console.log(string1.substring(pos.start, pos.end));
            pos[part]++;
            break;
        }
       
    }       
}
while(pos.end < string1.length) {
    moveForward(pos, 'end', 1); 
    moveForward(pos, 'start', -1); console.log(pos);
}


function containsAllHist2(hist) {
    for(var k in hist2) {        
        if(hist2[k] > hist[k]) {
            return false;
        }
    }
    
    return true;
}