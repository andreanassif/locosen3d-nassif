/* let nombreCompleto = prompt("Ingrese su nombre completo")
let email = prompt("Ingrese su email")
let telefono = prompt("Ingrese su teléfono")
let consulta = prompt("Deje su consulta aquí")
let enviar = confirm("Desea enviar su consulta?")

if (enviar) {
    alert("Su consulta fue enviada! En breve nos pondremos en contacto con ud.!!")
}else{
    alert("Su consulta no fue enviada!")
}
 */

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', newForm);

function newForm(e){
        
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let country = document.getElementById('country').value;
    let consulta = document.getElementById('consulta').value;

    console.log(nombre, email, phone, country, consulta);

    swal({
        title: "Excelente!",
        text: "Ya recibimos tu consulta! En breve nos pondremos en contacto!",
        icon: "success",
        button: "OK!",
    });

    formulario.reset();    
}