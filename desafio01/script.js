function isOdd(number) {
    return number % 2 != 0
}

function reverseNumber(number) {
    return Number(number.toString().split('').reverse().join(''))
}

function sumNumber(number) {
    return number + reverseNumber(number)
}

function getOdds(max) {
    let arr = []
    for (let i = 0; i < max; i++) {
        if (isOdd(sumNumber(i))) arr.push(i)
    }
    return arr
}

function printArrayOfOdds(max){
    for (number of getOdds(max)) { console.log(number) }
}

printArrayOfOdds(1000000)


