var S = [3, 5, 10];
function change(coins, n) {
    
    if(coins === 0) {
        return 1;
    }
    if(coins < 0) {
        return 0;
    }
    if(n === 0) {
        return 0;
    }
    
    return change(coins, n-1) + change(coins-S[n], n);
}

console.log(change(20, 2));
