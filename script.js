
function gerarNumero() {
    const min = Math.ceil(document.querySelector(".input-main").value);
    const max = Math.floor(document.querySelector(".input-max").value);
  

    if(min >= max){
        alert("O valor minimo tem que ser maior que o valor maximo")
    }else{
        const result = Math.floor(Math.random() * (max - min) + min);
        alert(result)
    }
        

} 

