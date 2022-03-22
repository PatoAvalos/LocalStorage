const guardoDatos = () => {   
    localStorage.setItem("inputNombre", inputNombre.value);
    localStorage.setItem("inputEmail", inputEmail.value);
    localStorage.setItem("inputSubject", inputSubject.value);
    localStorage.setItem("inputMessage", inputMensaje.value);
}

btnGuardar.addEventListener("click", () => guardoDatos());


