let pares = [2, 4, 6, 8, 10, 12, 14];

let impares = pares.map(function(num){
     return num*2 + 1
})

console.log(impares);


let impares2 = pares.map(function(num){
    return num + 1
})

console.log(impares2);