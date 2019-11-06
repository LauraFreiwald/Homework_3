let secret = Math.round(Math.random() * 100);
(function() {

      let generieren= function()
      {
        let Menge = parseFloat( document.getElementById("menge").value);
        let Min = parseFloat(document.getElementById("VON").value);
        let Max = parseFloat(document.getElementById("BIS").value);

        
       var Zahl = [];
        if( Menge > Max-Min)
         ausgabe.textContent= "Keine gültige Eingabe";
        else
        {
            for(let i=0; Zahl.length < Menge; i++) // Random Zahlen reinschreiben 
            {
                let secret = Math.round(Math.random() * Max)+Min; // Zufallszahl im Bereich generieren
                console.log(secret);

                if (!Zahl.includes(secret)) // wenn Zahl noch nicht vorhanden 
                { 
                Zahl[i]=secret; // Zufallszahl in Array schreiben
                } 
            
                Zahl.sort(function(a,b) { return a - b});// Zahl sortieren
                ausgabe.textContent= Zahl.toString(); // Array in String verwandeln und ausgeben 

                let Absatz = document.getElementById("ausgabe");
            }  
        }
      } 

let Generieren = document.getElementById("generieren");
Generieren.addEventListener("click", generieren);


}())