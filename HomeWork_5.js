const { chouse_arr_generator, Main_Arr } = require("./Interaction_Interface")
const { cutArr } = require("./Sorting_Algorithms")

chouse_arr_generator()

if(Main_Arr.length > 0){
    let result_sort = cutArr(Main_Arr)
    console.log('\x1b[32m%s\x1b[0m', "SORT RESULT:")
    console.log(result_sort)
}


