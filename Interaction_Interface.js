const prompt = require("prompt-sync")()
const Main_Arr = []
let twoDimensionalArray = []

function chouse_arr_generator(){
    console.clear()
    console.log("===================================")
    console.log("Chouse array generator")
    console.log("-----------------------------------")
    console.log("[R] => Random")
    console.log("[M] => Manually")
    console.log("[E] => Exit")
    console.log("===================================")
    selectMetod()
}

function selectMetod(){
    let Select_Metod = prompt("Select Metod: ")
    switch (Select_Metod){
        case 'R': console.clear(); Create_Arr_Random(); break
        case 'M': console.clear(); Create_Arr_Manually(); break
        case 'E': console.log('\x1b[35m%s\x1b[0m','Exit process...'); process.exit(); break
        default: console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again'); selectMetod()
    }
}

function Create_Arr_Random(){
    const lenght_Arr = parseInt(prompt("Length: "))
    const Min_Num = parseInt(prompt("Min: "))
    const Max__Num = parseInt(prompt("Max: "))
    for (let i = 0; i < lenght_Arr; i++) {
        const randomNum = Math.floor(Math.random() * (Max__Num - Min_Num + 1)) + Min_Num
        Main_Arr.push(randomNum)
    }
    console.log(Main_Arr)

    let Exit_From_this = prompt('Press Enter for sort...',)
}

function Create_Arr_Manually(){
    const inputString = prompt("Enter numbers separated by commas: ")
    const numbers = inputString.split(", ").map(number => parseFloat(number.trim()))
    Main_Arr = Main_Arr.concat(numbers)
    //twoDimensionalArray.push(numbers)

    // const Main_Arr = twoDimensionalArray.reduce((result, subArray) => result.concat(subArray), []);
    console.log(Main_Arr)

    let Exit_From_this = prompt('Press Enter for sort...',)
}

module.exports = {
    chouse_arr_generator,
    Main_Arr
}