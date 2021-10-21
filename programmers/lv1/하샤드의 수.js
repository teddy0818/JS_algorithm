function solution(x) {
    let sum = 0 
    let x_str = String(x)
    for(let i=0; i<x_str.length; i++) {
        sum += parseInt(x_str[i])
    }
    let answer = x % sum == 0 ? true : false
    return answer
}