function solution(n) {
    let answer = 0;
    
    // 제곱근 구하기
    let squareRoot = n ** (1/2)
    
    // squareRoot 가 정수면 제급근 존재
    if (squareRoot % 1 == 0) {
        answer = (squareRoot+1) ** 2
    } else {
        answer = -1
    }
    
    return answer;
}