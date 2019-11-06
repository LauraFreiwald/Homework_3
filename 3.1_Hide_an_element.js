(function() {


    
    function changeToBlue() {
        let mainHeadingId = document.getElementById("Titel");
        mainHeadingId.classList.add("blue-text");
    }

    let blueButton = document.getElementById("blueButton");
    blueButton.addEventListener("click", changeToBlue);

    
    function HideTitel() {
        let mainHeadingId = document.getElementById("Titel");
        mainHeadingId.style.visibility = "hidden";
    }

    let hideButton = document.getElementById("HideButton");
    hideButton.addEventListener("click", HideTitel);


}())