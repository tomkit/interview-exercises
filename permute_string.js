var string = 'him';

function permute(soFar, remaining) {
    if(remaining.length === 0) {
        console.log(soFar);
    } else {
        for(var i = 0; i < remaining.length; i++) {
            var nextRemaining = remaining.substring(0,i)+remaining.substring(i+1,remaining.length);
            permute(soFar+remaining[i], nextRemaining);
        }
        
    }
}

permute('', string);