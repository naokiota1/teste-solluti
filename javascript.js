
function validar(form) {
    
    var email = form.email.value;
    var senha = form.senha.value;

    if(email == "" || senha == "") {
        alert("Preencha os campos vazios!")
        return false;
    }
    if(senha.length < 6) {
         alert("Sua senha deve ter pelo menos 6 caracteres!")
         return false;
    }

    var x = document.forms["form"]["email"].value;
    var arroba = x.indexOf("@");
    var ponto = x.lastIndexOf(".");
    if (arroba<1 || ponto < arroba+2 || ponto + 2 >= x.length)
    {
    alert("Não é um endereço de e-mail válido!"); 
    return false; 
    }
    
    if(validar = true) {
        alert("Você logou no site!")
        return false;
    }
}


   


