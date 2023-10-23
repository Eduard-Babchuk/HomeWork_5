function cutArr(one_arr){

    let firstPartArray = []
    let secondPartArray = []

    let ToHalf = 0
    let FromHalf = Math.floor(one_arr.length / 2)

    for( ToHalf; ToHalf < Math.floor(one_arr.length / 2); ToHalf = ToHalf + 1){
        firstPartArray.push(one_arr[ToHalf])
    }

    for(FromHalf; FromHalf < one_arr.length; FromHalf = FromHalf + 1){
        secondPartArray.push(one_arr[FromHalf])
    }

    if(firstPartArray.length > 1 || secondPartArray.length > 1){
        return mergeArr(cutArr(firstPartArray), cutArr(secondPartArray))
    }

    return mergeArr(firstPartArray, secondPartArray)
}

function mergeArr(arr1, arr2){ 
    let i = 0
    let k = 0
    let resArr = []
    
    do{
        if(arr1[i] !== undefined){
            if(arr1[i] > arr2[k]){
                resArr.push(arr2[k])
                k++
            }
            else{
                resArr.push(arr1[i])
                i++
            }
        }else{
            resArr.push(arr2[k])
            k++
        }
    }
    while (i < arr1.length || k < arr2.length)
    return resArr 
}

module.exports = {
    cutArr
}