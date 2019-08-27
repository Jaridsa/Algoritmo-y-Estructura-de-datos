
let notas = [16, 17, 15, 13, 16, 20, 18, 11]
let b = [1, 5, 7, 4]

console.log(getMin(b))
console.log(getMax(b))

function nota(n){
    return notas[n]
}

function getMin(a){
    if(a.length == 0) return -1

    let min = nota(a[0])
    for(let i = 0; i < a.length; i++){
        if(nota(a[i]) < min) min = (nota(a[i]))
    }
    return min
}

function getMax(a){
    if(a.length == 0) return -1

    let max = nota(a[0])
    for(let i = 0; i < a.length; i++){
        if(nota(a[i]) > max) max = (nota(a[i]))
    }
    return max
}