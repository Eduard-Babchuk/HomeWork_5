const { chouse_arr_generator, Main_Arr } = require("./Interaction_Interface")
const { cutArr } = require("./Sorting_Algorithms")

chouse_arr_generator()

let result_sort = cutArr(Main_Arr)
console.log(result_sort)
