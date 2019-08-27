//hallar el minimo de los cuadrados

let a = [4, 8, 2, 5, 10, 3]

console.log(getMin(a))

function getMin(a) {

    if(a.length == 0) return -1

    let min = a[0] 
    for(let i = 0; i < a.length; i++){
        if(square(a[i]) < min) min = (square(a[i]))
    }
    return min
}

function getMax(a) {

    if(a.length == 0) return -1
    
    let max = a[0] 
    for(let i = 0; i < a.length; i++){
        if(square(a[i]) > max) max = (square(a[i]))
    }
    return max
}

function square(n){
    return n * n
}