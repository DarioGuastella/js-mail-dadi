const registeredEmail = [ "pippo@gmail.com", "topolino@gmail.com",  "paperino@gmail.com", "topolina@gmail.com", "paperina@gmail.com" ];
const btn = document.getElementById("emailBtn");

btn.addEventListener("click", function() {
    const userEmail = document.getElementById("userEmail").value;
    const title = document.getElementById("title");
    if (registeredEmail.includes(userEmail,0)){
        title.innerHTML = "Sei autorizzato";
    } else {
        title.innerHTML = "Non sei autorizzato";
    }
});