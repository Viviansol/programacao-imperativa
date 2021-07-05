let nomes = ['José', 'Maria', 'Pedro', "igor", "vivian", 'Maria', "cristina"];

let maria = nomes.filter(function(nome){
    if(nome == 'Maria'){
        return nome;
    }
});

console.log(maria);