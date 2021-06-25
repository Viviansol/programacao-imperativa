function Banco(numeroDeConta, saldo, nomeDoTitular) {
    this.numeroDeConta = numeroDeConta,
    this.saldo = saldo,
    this.nomeDoTitular = nomeDoTitular;

    this.deposito = function (dinheiro) {
        this.saldo += dinheiro,
        console.log("Você realizou um depósito de:" + ' ' + dinheiro + ", agora o seu saldo é: " + ' ' +this.saldo);
    }
    
    this.saque = function(dinheiroSacar){
        this.saldo -= dinheiroSacar;
        if(this.saldo < dinheiroSacar){
            console.log("Saldo insuficiente");
        }else{
            console.log("Você realizou um saque de:" + ' ' + dinheiroSacar + ", agora o seu saldo é: " + ' ' +this.saldo);
        }
    }



}

const banco = new Banco(101010101, 500, "Vivian");


banco.saque(500);