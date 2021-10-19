function solution(x, n) {
    let answer = Array(n).fill(1).map((v,i) => (i+1)*x)
    
    return answer
}