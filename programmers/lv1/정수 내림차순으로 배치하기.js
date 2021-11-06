function solution(n) {
    let answer = 0;
    let str_n = String(n)
    
    // 정수를 배열로 만들기
    let numArr = []
    for(let i=0; i<str_n.length; i++) {
        numArr.push(parseInt(str_n[i]))
    }
    
    // 배열 역순으로 정렬
    answer = parseInt(numArr.sort((a, b) => b-a).join(''))

    return answer;
}