const { chouse_arr_generator, mainArr } = require("./Interaction_Interface")
const { cutArr } = require("./Sorting_Algorithms")

chouse_arr_generator()

if(mainArr.length > 0){
    let resultSort = cutArr(mainArr)
    console.log('\x1b[32m%s\x1b[0m', "SORT RESULT:")
    console.log(resultSort)
}


