function andar()
 {
    return 'O carro esta andando'    
}
 function parar(){    
    return 'O carro esta parado'
 }
 
  function acaoCarro(andar,parar){
      return andar()+' ou '+ parar(); 
     
 };

 console.log(acaoCarro(andar,parar));

/*andar("HRV");
parar("jeep");

acaoCarro(andar("HRV"), parar("jeep"))