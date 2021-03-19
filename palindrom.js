let arr = [808, 809,111,1001]
let arr2 = [908,809,122, 102]

const getPalindrome = (arr) => {
    let result = [];
    arr.forEach((el) => {
        let intStr = el.toString()
        let isPalindrome = true
        for(c = 0; c < intStr.length; c++){
            if ((intStr[c] === intStr[(intStr.length - 1) - c] ) === false)  { 
                isPalindrome = false
                break    
            }
        }   
        if(isPalindrome) result.push(el)
    })
   return result
}

console.log("Kasus 1: ",getPalindrome(arr))
console.log("Kasus 2: ",getPalindrome(arr2))