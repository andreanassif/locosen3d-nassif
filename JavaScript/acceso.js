let registroUser = document.querySelector('#registrarse');
registroUser.addEventListener('submit', crearUser);

function crearUser(e){

    e.preventDefault();

    let emailr = document.getElementsByName('emailregistro');

    console.log(emailr);

    swal("Su registro fue ingresado!", "Revisa tu correo para configurar tu clave y perfil");

    registroUser.reset();
}

let ingresoUser = document.querySelector('#iniciar-sesion');
ingresoUser.addEventListener('submit', ingresar);

function ingresar(e){

    e.preventDefault();

    let emaili = document.getElementsByName('emailingreso');
    let password = document.getElementsByName('password');

    console.log(emaili, password);

    ingresoUser.reset();

}