alert("Escriba un numero para saber a que rango pertenece");
let numero = parseInt(prompt("escriba su numero"))
if (numero > 0 && numero <= 100){
    alert("Su numero esta entre 1 y 100");
}
else if (numero > 100 && numero <= 500) {
    alert("su numero es mayor a 100 y menor o igual a 500")
}
else if (numero > 500 && numero <= 1000) {
    alert("su numero es mayor a 500 y menor o igual a 1000")
}
else{
    alert("su numero es mayor a 1000")
}