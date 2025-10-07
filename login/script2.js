const formu = document.querySelector("#formu")
const emailInpunt = document.querySelector("#email")
const passwordInpunt = document.querySelector("#password")


formu.addEventListener("submit", (event) => {
    event.preventDefault(); 

if(emailInpunt.value === "" || !isEmailValid(emailInpunt.value)) {
        alert("Por favor, Preencha o seu email corretamente!")
        return;
    }
    // Função que valida email 
function isEmailValid(email) {
    //Criar uma regex para validar email 
    const  emailRegex = new RegExp(
        //usuario12@gmail.com
        /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/
    )
    if(emailRegex.test(email)) {
        return true
    }
    return false;
}
 //Verificar se a senha está preenchida
    if(!validatePassword(passwordInpunt.value, 8)) {
         alert("A senha preicsa ter no mínimo 8 dígitos.")
    }
    // Função que valida a senha 
    function validatePassword(password, minDigits) {
        if(password.length >= minDigits){
            //Senha valida 
            return true
     }
     //Senha invalida   
            return false
    }
    //Se tdos os campos tiverem preenchido corretamente, envie o formu
    formu.submit();

})

// Função que valida a senha 
    function validatePassword(password, minDigits) {
        if(password.length >= minDigits){
            //Senha valida 
            return true
     }
     //Senha invalida   
            return false
    }