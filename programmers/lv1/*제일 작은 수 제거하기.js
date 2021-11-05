function solution(arr) {
    let answer = []
    
    if(arr.length <= 1) {
        answer = [-1]
    } else {
        // ... 안붙여서 계속 틀림. Math.min 함수에 전개연산자를 써야함
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        answer = arr
    }
    
    return answer
}