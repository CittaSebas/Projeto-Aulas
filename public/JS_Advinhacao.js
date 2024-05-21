    function gerarnumero(){
        aleatorio = Math.floor(Math.random()*99);
        document.getElementById("numale").innerHTML = aleatorio;
    }

const body = document.body;
    function testetexto(){
        NC = parseInt(document.getElementById("NumChut").value)
        if (NC>aleatorio){
            document.getElementById("Textteste").innerHTML= "Número muito alto";
            document.getElementById("Textteste").style.setProperty("background-color", "red");
        }
        if (NC<aleatorio) {
            document.getElementById("Textteste").innerHTML = "Número muito baixo";
            document.getElementById("Textteste").style.setProperty("background-color", "red");
        }
        if (NC===aleatorio) {
            document.getElementById("Textteste").innerHTML = "Acertou Miseravi";
            document.getElementById("Textteste").style.setProperty("background-color", "green");
        }
    }

