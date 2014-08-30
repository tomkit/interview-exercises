var sequence1 = [0, 1, -2, 4, 9, 11];

function lis_length(a) {
    var n = a.length;
    var q = a.slice();
    
    var j, k;
    var max;
    for(k = 0; k < n; k++) {
        max = 0;
        for(j = 0; j < k && a[k] > a[j]; j++) {
            if(q[j] > max) {
                max = q[j];
            }
            q[k] = max + 1;
        }                
    }
    max = 0;
    
    var i;
    for(i = 0; i < n; i++) {
        if(q[i] > max) {
            max = q[i];
        }
    }
    
    return max;
}

console.log(lis_length(sequence1));