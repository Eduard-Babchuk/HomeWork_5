const prompt = require("prompt-sync")()
let Main_Arr = []

function chouse_arr_generator(){
    console.clear()
    console.log("===================================")
    console.log('\x1b[36m%s\x1b[0m', "Chouse array generator")
    console.log("-----------------------------------")
    console.log('\x1b[32m%s\x1b[0m', "[R] => Random")
    console.log('\x1b[32m%s\x1b[0m', "[M] => Manually")
    console.log('\x1b[33m%s\x1b[0m', "[E] => Exit")
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
    if(!isNaN(lenght_Arr) && !isNaN(Min_Num) && !isNaN(Max__Num)){
        for (let i = 0; i < lenght_Arr; i++) {
            const randomNum = Math.floor(Math.random() * (Max__Num - Min_Num + 1)) + Min_Num
            Main_Arr.push(randomNum)
        }
        console.log(Main_Arr)
    
        let Exit_From_this = prompt('Press Enter for sort...',)
    }
    else{
        console.clear()
        console.log('\x1b[31m%s\x1b[0m',"Invalid input. Please enter a valid number.")
        return Create_Arr_Random()
    }
}

// 1, 4, 10, 26, 43, f
// 23, 56, 4, 32, 100, 57

function Create_Arr_Manually(){ 
    Main_Arr = []

    const inputString = prompt("Enter numbers separated by commas: ")
    const inputNumbers = inputString.split(", ")

    for(let i = 0; i < inputNumbers.length; i++){
        const number = parseFloat(inputNumbers[i].trim())
        if (isNaN(number)) {
            console.clear()
            console.log('\x1b[31m%s\x1b[0m',"Invalid input. Please enter a valid number.")
            return Create_Arr_Manually()
        }
        Main_Arr.push(number)
    }
    console.log(Main_Arr)

    let Exit_From_this = prompt('Press Enter for sort...',)
}

module.exports = {
    chouse_arr_generator,
    Main_Arr
}