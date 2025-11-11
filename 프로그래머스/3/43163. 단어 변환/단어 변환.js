function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    let queue = [[begin, 0]];
    let visited = new Set();
    
    while(queue.length > 0) {
        let [word, count] = queue.shift();
        
        
        if (visited.has(word)) {
            continue;
        }
        console.log(word, count);
        
        if (word == target) {
            return count;
        }
        
        for (next of words) {
            if (!visited.has(next) && beGyou(word, next)) {
                
                visited.add(word);
                queue.push([next, count + 1]);
            }
        }
        
    }



    
    function beGyou(a, b) {
        let beCount = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b[i]) {
                beCount++;
            }
        }
        return beCount == (a.length - 1) ? true : false;
    }
    
    
    
    
}