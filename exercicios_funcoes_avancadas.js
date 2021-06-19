let fizBuzz = (numero1, numero2) => {
   
    for(let i=1; i<=100; i++){

        if(i%numero1 ==0 && i%numero2 == 0){
            console.log('FizzBuzz')
        }else if(i%numero1 == 0){
            console.log('Fizz')
        }else if(i%numero2 ==0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

console.log(fizBuzz(6,3));


//exercicios2

