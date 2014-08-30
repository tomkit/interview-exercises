var num = 4;

function graycode(n) {
    
    return (n >> 1) ^ n;
}

for(var i = 0; i < Math.pow(2, num) - 1; i++) {
    console.log(graycode(i).toString(2));
}