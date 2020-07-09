function contagem(){
    var inicial = document.getElementById('inicial');
    var final = document.getElementById('final');
    var passo = document.getElementById('passo');
    var resultado = document.querySelector('Div#resultado');
    //resultado.innerHTML = "Os valores capturados foram " + inicial + " e " + final + " e " + passo;
    
    if (inicial.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert ("[ERRO] Falta dados!");
    } else {                            
        resultado.innerHTML = "Contando...<br>";
        let i = Number(inicial.value);
        let f = Number(final.value);
        let p = Number(passo.value);
        if(p <= 0){
            alert("Passo inválido! Vamos considerar Passo = 1");
            p=1;
        }
        if (i < f){
            //Contagem Crescente
            for (let c = i ; c <= f ; c += p){
                resultado.innerHTML += "\u{1F449} "+c+" "; //No caso desse '+=' é conctenando com o 'Contando...' lá em cima
                //Esse código '\u{1F449}' é o código do emoji
            }
        }else{
            for (let c = i ; c >= f ; c -= p){
                resultado.innerHTML += "\u{1F449} "+c+" ";
        }  
           resultado.innerHTML += " \u{26F3}";
    }

    }
}
