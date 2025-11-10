function solution(maps) {
    let visited = Array.from({length : maps.length}, () => Array(maps[0].length).fill(0));
    
    let dr = [1, -1, 0, 0];
    let dc = [0, 0, 1, -1];
    
    if (maps[0][0] === 0) {
        return -1;
    }
    
    let queue = [];
    let head = 0;
    
    visited[0][0] = 1; 
    queue.push([0, 0]);
    
    while (head < queue.length) {
        let [r, c] = queue[head++];
        
        for (let k = 0; k < 4; k++) {
            let nr = r + dr[k];
            let nc = c + dc[k];
            
            if (nr < 0 || nr >= maps.length || nc < 0 || nc >= maps[0].length) {
                continue;
            }
            if (maps[nr][nc] === 0) {
                continue;
            }
            if (visited[nr][nc] !== 0) {
                continue;
            }
            
            visited[nr][nc] = visited[r][c] + 1;
            queue.push([nr, nc]);
            
            
        }
    }
    const answer = visited[maps.length - 1][maps[0].length - 1];
    return answer === 0 ? -1 : answer;
}