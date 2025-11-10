function solution(participant, completion) {
    
    let map = new Map();
    
    for (let count of participant) {
        map.set(count, (map.get(count) || 0) + 1);
    }
    
    for (let k of completion) {
        map.set(k, (map.get(k) || 0) - 1);
    }
    
    for (let [k, v] of map) {
        if (v == 1) {
            return k;
        }
    }
    
    
    
}