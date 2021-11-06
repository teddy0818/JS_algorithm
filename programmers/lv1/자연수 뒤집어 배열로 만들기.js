function solution(n) {
    return String(n).split('').map((v,i) => +v).reverse()
}