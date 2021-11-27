function solution(s) {
    let answer = ''
    let wordArr = s.split(" ")
    for(let i=0; i<wordArr.length; i++) {
        let word = wordArr[i]
        let afterWord = ''
        for(let j=0; j<word.length; j++) {
            if(j == 0 || j%2 == 0) {
                afterWord += word[j].toUpperCase()
            } else {
                afterWord += word[j].toLowerCase()
            }
        }
        
        if(i != wordArr.length-1) {
            answer += afterWord + " "
        } else {
            answer += afterWord
        }
         
    }
    return answer;
}