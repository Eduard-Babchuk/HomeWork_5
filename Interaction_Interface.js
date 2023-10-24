const prompt = require("prompt-sync")()
let mainArr = []
const colors = { reset: '\x1b[0m', red: '\x1b[31m' }

function chouse_arr_generator(){
    console.clear()
    console.log("===================================")
    console.log('\x1b[36m%s\x1b[0m', "Chouse array generator")
    console.log("-----------------------------------")
    console.log('\x1b[32m%s\x1b[0m', "[R] => Random")
    console.log('\x1b[32m%s\x1b[0m', "[M] => Manually")
    console.log('\x1b[33m%s\x1b[0m', "[E] => Exit")
    console.log("===================================")
    Select_Metod()
}

function Select_Metod(){
    let selectMetod = prompt("Select Metod: ")
    switch (selectMetod){
        case 'R': console.clear(); Create_Arr_Random(); break
        case 'M': console.clear(); Create_Arr_Manually(); break
        case 'E': console.log('\x1b[35m%s\x1b[0m','Exit process...'); process.exit(); break
        default: console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again'); Select_Metod()
    }
}

function Create_Arr_Random(){
    const lenghtArr = parseInt(prompt("> Length: "))
    const minNum = parseInt(prompt("> Min: "))
    const maxNum = parseInt(prompt("> Max: "))
    if(!isNaN(lenghtArr) && !isNaN(minNum) && !isNaN(maxNum)){
        for (let i = 0; i < lenghtArr; i++) {
            const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
            mainArr.push(randomNum)
        }
        console.log('\x1b[36m%s\x1b[0m', "YOUR ARRAY: ")
        console.log(mainArr)
    
        let Exit_From_this = prompt('Press Enter for sort...',)
    }
    else{
        console.clear()
        console.log('\x1b[31m%s\x1b[0m',"Invalid input. Please enter a valid number.")
        return Create_Arr_Random()
    }
}

function Create_Arr_Manually(){
    do {
        console.clear()

        process.stdout.write("To finish, enter ")
        process.stdout.write(colors.red + "finish" + colors.reset)
        process.stdout.write(". Enter data into the array:\n")                  

        console.log('\x1b[36m%s\x1b[0m', "YOUR ARRAY: ")
        console.log(mainArr)

        let inputString = prompt(">> ")
        if (inputString === 'finish') {
            break;  
        }
        
        const number = parseFloat(inputString)
        if (!isNaN(number)) { 
            mainArr.push(number)
        }
    } while (true)
}

module.exports = {
    chouse_arr_generator,
    mainArr
}