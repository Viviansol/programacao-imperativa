function Restaurante(nome, cardapio){
    this.nome = nome,
    this.cardapio = cardapio,
    
    this.saudacao = function (){
        console.log('Bem vindo ao:' + ' ' + this.nome + '.'+ ' ' +  'O cardápio é:' + ' ' + this.cardapio);
    }

}

const restaurante = new Restaurante('San ro' , ['comida tailandesa', 'onigiri', 'tempura']);

console.log(restaurante.saudacao());