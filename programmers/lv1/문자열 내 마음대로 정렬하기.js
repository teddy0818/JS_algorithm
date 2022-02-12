function solution(strings, n) {
    
    strings.sort(function (a, b) {
        let word_x = a.toLowerCase()
        let word_y = b.toLowerCase()
        let x = a[n].toLowerCase()
        let y = b[n].toLowerCase()
        // console.log(`x:${x} y:${y}`)
        
        if(x < y) {
            return -1
        }
         if(x > y) {
            return 1
        }
        if(x == y) {
            if(word_x < word_y) {
                return -1
            }
          if(word_x > word_y) {
                return 1
            }
        }
    })
    
    return strings
}