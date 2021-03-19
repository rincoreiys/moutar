let input = [10,2,1,5,3,6]

//Using selection algorithm
const getSortedNumber = (arr) => {
    arr.forEach((el, i) => {
        let selected =  { index: i, value: el};
        for(c = i+1; c < arr.length; c++ ){
            if(selected.value > arr[c]) {
                selected = {index: c, value: arr[c]}
            }
        }
        let bucket = {index: i, value: el}
        arr[i] = selected.value
        arr[selected.index] = bucket.value
    })
    return arr
}

console.log("Urutan array angka yang disortir ASC : ", getSortedNumber(input))