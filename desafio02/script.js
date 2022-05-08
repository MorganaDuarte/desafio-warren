let x = process.argv[2]

function getArgvs(){
    return process.argv.slice(2,process.argv.length)
}

function sortArray(array) {
    return array.sort((first, second) => first - second )
}

function countPresents(array) {
    let presents = []
    let index = 0
    let number = array[index]
    while (number <= 0) {
        presents.push(number)
        number = array[++index]
    }
    return presents.length
}

function verifyClass(numberOfPresents) {
    if (numberOfPresents >= x) return "Aula normal"
    return "Aula cancelada"
}

let tempoChegada = getArgvs()
let studentsSorted = sortArray(tempoChegada)
let numberOfPresents = countPresents(studentsSorted)

console.log(verifyClass(numberOfPresents))