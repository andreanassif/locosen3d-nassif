let nombreCompleto = prompt("Ingrese su nombre completo")
let email = prompt("Ingrese su email")
let telefono = prompt("Ingrese su teléfono")
let consulta = prompt("Deje su consulta aquí")
let enviar = confirm("Desea enviar su consulta?")

if (enviar) {
    alert("Su consulta fue enviada! En breve nos pondremos en contacto con ud.!!")
}else{
    alert("Su consulta no fue enviada!")
}
