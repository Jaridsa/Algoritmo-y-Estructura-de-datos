/*hallar el minimo  el maximo de los 
valores procesados del arreglo*/

let a = [4, 8, 2, 5, 10, 3]
let average = getAverage(a)

console.log(getMinValue(a))
console.log(getAverage(a))

function getMinValue(a) {

    if(a.length == 0) return -1

    let min = a[0] 
    let minIndex

    for(let i = 0; i < a.length; i++){
        if(distance(a[i]) < min) { 
            min = distance(a[i])
            minIndex = i
        }
    }
    return minIndex
}

function distance(n){
    return Math.abs(n - average)
}

function getAverage(a){

    let sum = 0

    for(let i = 0; i < a.length; i++){
        sum = sum + a[i]
    }
    return sum / a.length
}