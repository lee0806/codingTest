function solution(citations) {
    let index = citations.sort((a, b) => b - a);
    let count = 0;
    let answer = 0;
    for (let j = 1; j <= index.length; j++) {
        for (let i = 0; i < index.length; i++) {
            if (j <= index[i]) {
                count++;
            }
            if (count >= j && j >= answer) {
                answer = j;
            }
        }
        count = 0;
    }
    return answer;
}