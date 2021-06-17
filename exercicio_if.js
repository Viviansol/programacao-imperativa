
let status = true;

if(status == true){
    console.log("O valor é true-verdadeiro")
}
if(status == false){
    console.log("O valor é false - falso")
}


let linguagem = " "
if(linguagem == "javascript") {
    console.log("Estou aprendendo")
} else {
    console.log("Aprenderei mais tarde")
}

let carro = "preto"


switch (carro){
    case  "Braco":
       console.log("Esse carro está disponivel") 
       break;
    case "marrom":
        console.log("Preciso pesquisar")
       break;
    case "preto":
        console.log("Quer que eu te entregue quando ?")
        break;
    default: 
        console.log("Infelizmente não temos esse carro disponivél")        
    }


    let estacao = "verão"

switch (estacao) {
    case "verão":
        console.log("Que calor hein?!")
        break;
    case "inverno":
        console.log("Frio dms!")
        break; 
    case "Outono":
        console.log("É a estação que as folhas caem.")
        break;
    case "Primavera":
       console.log("O momento em que as flores crescem")
        break;   
    default: console.log("Ops estação inválida.")                    
}



function podeSubir(altura,acompanhada){
    let podeSubir = false;

   if(altura >= 1.40 && altura <2 ){
       podeSubir = "Acesso autorizado "
   } if(altura < 1.40 && acompanhada == true){
       podeSubir = "Acesso com acompanhante"
   } if (altura <= 1.20 && acompanhada == true){
       podeSubir = "Acesso negado"
   }
   return podeSubir;

   }
   




console.log(podeSubir(1.20, true))