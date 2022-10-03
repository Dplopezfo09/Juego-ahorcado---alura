String.prototype.replaceAt=function(index, character){return this.substr(0, index) + character + this.substr(index+character.length); } 


//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, grafema);

const palabras = ["casa", "perro", "gato", "loro", "elefante"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraGuion = palabra.replace(/./g, "_ ");
let contadorFallas = 0;
document.querySelector("#output").innerHTML = palabraGuion;
document.querySelector("#calcular").addEventListener("click", () =>{
    
    const grafema = document.querySelector("#grafema").value;
    let haFallado = true;
    for(const i in palabra){

        if (grafema == palabra[i]) {
            palabraGuion = palabraGuion.replaceAt(i*2, grafema);
            haFallado = false;
        }
    } 

    if (haFallado){
        contadorFallas++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(307*contadorFallas) + "px 0";
       
        if(contadorFallas == 4){
            alert("Haz perdido el juego")
        }
    }

    else{
        if(palabraGuion.indexOf("__") <0){
            document.querySelector("#ganador").style.display = "flex";
        }
    }
    document.querySelector("#output").innerHTML = palabraGuion;

    document.querySelector("#grafema").value = " ";
    document.querySelector("#grafema").focus();

    
});


