function solution(n, m) {
    let resultArr = [];
    const maxCommonDividor = (a, b) => {
        if(b == 0) {
            return a;
        }
        return maxCommonDividor(b, a % b);
    };
    
    resultArr.push(maxCommonDividor(n, m));
    resultArr.push(n * m / maxCommonDividor(n, m));
    
    return resultArr;
}