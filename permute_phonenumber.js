var phoneNumber = ['1','8','0','0','1','2','3','4','5','6','7'];
var LETTER_LOOKUP = {    
    '1' : ['A', 'B', 'C'],
    '2' : ['D', 'E', 'F'],
    '3' : ['G', 'H', 'I'],
    '4' : ['J', 'K', 'L'],
    '5' : ['M', 'N', 'O'],
    '6' : ['P', 'Q', 'R'],
    '7' : ['S', 'T', 'U'],
    '8' : ['V', 'W', 'X'],
    '9' : ['Y', 'Z', 'A'],
    '0' : ['B', 'C', 'D']
};

function permutePhone(phoneSoFar, phoneRemaining) {
    
    if(phoneRemaining.length === 0) {
        console.log(phoneSoFar);
        return;
    }
    
    var i;
    var symbols = LETTER_LOOKUP[phoneRemaining[0]];
    for(i = 0; i < symbols.length; i++) {
        
        permutePhone(phoneSoFar+symbols[i], phoneRemaining.slice(1));
    }
}

permutePhone('', phoneNumber.slice(0));