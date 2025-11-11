function solution(sizes) {
    let W = []; // 가로값
    let H = []; // 세로값
    let sum = []; // 명함의 넓이 값
    
    for (let j = 0; j < sizes.length; j++) {
        W.push(sizes[j][0]); // 가로에 해당하는 값만 배열에 저장
        H.push(sizes[j][1]); // 세로에 해당하는 값만 배열에 저장
        sum.push(sizes[j][0] * sizes[j][1]); // 가로와 세로를 곱한 넓이 값을 저장
    }
    W.sort((a, b) => b - a); // 내림차순으로 정렬
    H.sort((a, b) => b - a); // 내림차순으로 정렬
    let high = W[0] >= H[0] ? W[0] : H[0]; // 가로와 세로 중 큰 값을 선택
    
    // 넓이를 가장 큰 값으로 나누고 정렬
    sum = sum.map((x) => Math.ceil(x / high)).sort((a, b) => b - a);
    
    let max = 0;
    for (let k = 0; k < sum.length; k++) {
        // 가로와 세로중 큰 값은 이미 모든 명함 중 가장 큰 값으로 매꿔지기 때문에 그 다음으로 작은 값을 선정
        let min = sizes[k][0] <= sizes[k][1] ? sizes[k][0] : sizes[k][1];
        // sum값과 비교해서 sum보다 큰값의 최소값을 선정
        if (min >= sum[0] && max <= min) {
            max = min;
        }
    }
    // 최솟값 선정
    return max * high;
}

