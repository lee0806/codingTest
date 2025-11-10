function solution(num_list) {
    let numHole = [];
    let numCCak = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            numCCak.push(num_list[i]);
            
        } else {
            numHole.push(num_list[i]);
        }
    }
    
    let numHole2 = numHole.join("");
    let numCCak2 = numCCak.join("");
    
    let answer = Number(numHole2) + Number(numCCak2);
    
    return answer;
    
    
}