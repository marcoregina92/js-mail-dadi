const listaMail = ["johnsnow@gmail.com", "pippobaudo@gmail.com", "frankzappa@gmail.com", "rinogaetano@gmail.com"];
const inputMail = document.getElementById("inputMail");
const btn = document.getElementById("inputButton");

btn.addEventListener("click", function(){
    
    let user = false;

    for (let i = 0; i < listaMail.length; i++) {
        let mail = listaMail[i];

        if (inputMail.value == mail) {
            user = true;
            console.log("mail corretta")            
        }        
    }

    if(user) {
        document.getElementById("result").innerHTML = "Accesso consentito";
    } else {
        document.getElementById("result").innerHTML = "Accesso non consentito";
    }

});