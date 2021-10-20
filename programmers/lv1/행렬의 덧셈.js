function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++) {
        let arr = []
        for(let z=0; z<arr1[i].length; z++) {
           let sum = arr1[i][z] + arr2[i][z]
           arr.push(sum)
        } 
        answer.push(arr)
    }
    return answer;
}