(function() {

      
    let Berechnung = function() {
        let Erste = parseFloat(document.getElementById("Z1").value);
        let Operation = document.getElementById("operation");
        let Zweite = parseFloat(document.getElementById("Z2").value);
        let Ergebnis = document.getElementById("Ergebnis");

        if (Operation.value == "+") {
            ausgabe.textContent = Erste + Zweite;
        } else if (Operation.value == "-") {
            ausgabe.textContent = Erste - Zweite;
        } else if (Operation.value == "*") {
            ausgabe.textContent = Erste * Zweite;
        } else if (Operation.value == "/") {
            ausgabe.textContent = Erste / Zweite;
        }
    }
    
    let Berechnen = document.getElementById("berechnen");

    Berechnen.addEventListener("click",Berechnung );
}())