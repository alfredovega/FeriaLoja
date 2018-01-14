/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var nombre;

//var apellido = "Oli";

//var elemento = 1;
//var elemento2 = 2;

//if(elemento===1){
    //document.write("es uno");
//}else{
// document.write("es otro")  ; 
//}

var nombre = prompt("introduce tu nombre");
if (nombre === "Andres"){
alert("Bienvenido" +" "+ nombre);
}
else{
    alert("No esta registrado como administrador de la feria el nombre:" +" "+ nombre);
    location.href="FeriaLojaIndex.html";}
document.write("hola a mi");
//arreglo.pop(); pop sirve para eliminar el ultimo elemento del arreglo
//arreglo.push(); push sirve para aumentar elemento al arreglo al final
// var arreglo3= arreglo.concat(arreglo2); concat une arreglos o variables
// arreglo.join(":"); agrega lgun espasiado o simbolo entre elementos del arreglo
