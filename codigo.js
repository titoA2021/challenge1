var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");

var copiar = document.querySelector("#copiado");
var textCo = document.querySelector("#textArea");

var warning = document.querySelector("#warning");
var placeholderInfo = document.querySelector("#placeholderInfo");
var revelar = document.querySelector("#textoDes");

const vocal = ["a", "e", "i", "o", "u"];
const codigo = ["ai", "enter","imes","ober","ufat"];

const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"," "];

function verificar(texto){
    var flag = true;
    var letra = 0;
    while (flag && letra < texto.length){
        if (letras.includes(texto[letra])){
            flag = true;
        } else{
            flag = false;
        }
        letra++;
    }
    return flag;
}

function separarTexto(){
    var palabras = [];
    var texto = document.getElementById("textInput").value;
    document.getElementById("textInput").value = "";
    if(verificar(texto) == true){
        palabras = texto.split(" ");
    }else{
        revelar.classList.add('ocultarTexto');
        placeholderInfo.classList.remove('ocultarTexto');
        warning.classList.add('warning');
        warning.textContent = 'El texto no coincide con las especificaciones';
        userInput.focus();
    }
    return palabras;
}

function funcionEncriptado(palabra){
    var newPalabra = "";

    for (var letra of palabra){
        if(letra == vocal[0]){
            letra = codigo[0];
        }else if(letra == vocal[1]){
            letra = codigo[1];
        }else if(letra == vocal[2]){
            letra = codigo[2];
        }else if(letra == vocal[3]){
            letra = codigo[3];
        }else if(letra == vocal[4]){
            letra = codigo[4];
        }else {
            letra = letra;
        }
        newPalabra += letra;

    }
    return newPalabra + " ";
    
}

function funcionDesencriptado(palabra){
    var newPalabra = "";
    var i=0;

    while (i < 5){
        if(palabra.includes(codigo[i])){
            newPalabra = palabra.replace(codigo[i],vocal[i]);
            palabra = newPalabra;
        }else{
            i++;
        }

    }
    return (palabra + " ");

}

function mostrar(frase){
    revelar.classList.remove('ocultarTexto');
    placeholderInfo.classList.add('ocultarTexto');
    document.getElementById("textArea").value = frase;
}

function desarrolloE(){
    var newArray = separarTexto();
    var frase = ""
    for (var word of newArray){
        frase += funcionEncriptado(word);
    }
    mostrar(frase.slice(0,(frase.length-1)));
}

function desarrolloD(){
    var newArray = separarTexto();
    var frase = ""
    for (var word of newArray){
        frase += funcionDesencriptado(word);
    }
    mostrar(frase.slice(0,(frase.length-1)));
}

function copy() {
    textCo.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.getElementById("textArea").value = "";
    document.getElementById("textInput").focus();
}

copiar.addEventListener('click',copy);
encriptar.onclick = desarrolloE;
desencriptar.onclick = desarrolloD;