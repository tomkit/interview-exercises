function powerset(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        console.log('outer loop start');
        for (var j = 0, len = ps.length; j < len; j++) {
            
            var merged = ps[j].concat(ary[i]);
            console.log(merged);
            ps.push(merged);
        }
    }
    return ps;
}
 
var res = powerset([1,2,3,4]);
console.log('');
console.log(res);