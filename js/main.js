const registeredEmail = [ "pippo@gmail.com", "topolino@gmail.com",  "paperino@gmail.com", "topolina@gmail.com", "paperina@gmail.com" ];
const btn = document.getElementById("emailBtn");

btn.addEventListener("click", function() {
    const userEmail = document.getElementById("userEmail").value;
    console.log(userEmail);
    if (registeredEmail.includes(userEmail,0)){
        console.log("Sei autorizzato");
    } else {
        console.log("Non sei autorizzato")
    }

});