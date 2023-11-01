const registeredEmailList = [ "pippo@gmail.com", "topolino@gmail.com",  "paperino@gmail.com", "topolina@gmail.com", "paperina@gmail.com" ];
const btn = document.getElementById("emailBtn");
const userEmail = document.getElementById("userEmail");
const title = document.getElementById("title");

btn.addEventListener("click", function() {
    
    for (let i = 0; i < registeredEmailList.length; i++) {
        const validEmail = registeredEmailList[i];
        console.log( validEmail );
        console.log(userEmail.value);
        if (validEmail == userEmail.value){
            title.innerHTML = "Sei autorizzato";
            break;
        } else {
            title.innerHTML = "Non sei autorizzato";
        }
    }
    });
    
