/* 유클리드 호제법 */

function solution(n, m) {
    let result = [];
    
    const GreatestCommonFactor = (a, b) => {
        if(b % a == 0) {
            return a
        }
        
        return GreatestCommonFactor(b, b % a)
        
    }
    result.push(GreatestCommonFactor(n, m))
    result.push(n*m / GreatestCommonFactor(n, m))
    return result;
}