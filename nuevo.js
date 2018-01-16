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

var nombre = prompt("Los nombres de Administrador son: Andres o Rodrigo"+ " " +"introduce uno de estos nombres");
if (nombre === "Andres" || nombre ==="Rodrigo" ){
alert("Bienvenido" +" "+ nombre);
}
else{
   alert("No esta registrado como administrador de la feria el nombre:" +" "+ nombre + " --- "+ "Los nombres de Administrador autorizados son: Andres o Rodrigo");
    location.href="FeriaLojaIndex.html";}
document.write("Bienvenido" + " "+ nombre);

