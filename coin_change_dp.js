// NOTE: work in progress

var S = [3,5,10];
function change(n, m) {
    var table = [];
    
    for(var i = 0; i < n; i++) {
        table.push([]);
        for(var j = 0; j < m; j++) {
            table[i].push([]);
        }
    }
    
    for(var i = 0; i < n; i++) {        
        for(var j = 0; j < m; j++) {
            if(i === 0) {
                table[i][j] = 1;
            } else if(j === 0) {
                table[i][j] = 0;
            } else if(S[j] > i) {
                table[i][j] = table[i][j-1];
            } else {
                table[i][j] = table[i][j-1] + table[i-S[j]][j];
            }           
        }
    }
    
    console.log(table);
}

change(20, 3);
