 var a = window.onload = function(){
    document.getElementById("exampleFormControlTextarea1").onchange = Mostrar;
    document.getElementById("boton").onclick= ventana;
    document.getElementById("close").onclick= ventanaClose;
    document.getElementById("boton1").onclick = SuperCombo;
    document.getElementById("boton2").onclick = ComboPersonal;
    document.getElementById("boton3").onclick = ComboInfantil;
    
    var check = document.querySelectorAll('.form-check-input');
   

    document.getElementById("RADIO1").onchange = check01;
    document.getElementById("RADIO2").onchange = check02;
    document.getElementById("RADIO3").onchange = check03;
    document.getElementById("RADIO4").onchange = check04;
    document.getElementById("RADIO5").onchange = check05;
    document.getElementById("RADIO6").onchange = check06;
    document.getElementById("RADIO7").onchange = check07;
    document.getElementById("RADIO8").onchange = check08;
    document.getElementById("RADIO9").onchange = check09;
    document.getElementById("RADIO10").onchange = check10;
  
//ARRAY
let cuenta = [];
document.getElementById("botones001").addEventListener("change", total);

//RADIO BUTTONS
function SuperCombo() { 
  if(document.getElementById("boton1").checked==true){
    cuenta.push(7.25);
    alert("Super Combo agregado");
}else if(document.getElementById("RADIO1").checked ==false){
   cuenta.shift(7.25)
}
 


}
function ComboPersonal(){

  if(document.getElementById("boton2").checked==true){
    cuenta.push(5.75);
    alert("Combo personal agregado");
  }else if(document.getElementById("RADIO2").checked ==false){
    cuenta.shift(5.75)
  }
 }
 function ComboInfantil(){

  if(document.getElementById("boton3").checked==true){
    cuenta.push(3.50);
    alert("Combo infantil agregado");
  }else if(document.getElementById("RADIO3").checked ==false){
    cuenta.shift(3.50)
  }

 }

 //CHECK BUTTONS
function check01(){
  
    if(document.getElementById("RADIO1").checked==true){
       cuenta.push(1.50);
  }else if(document.getElementById("RADIO1").checked==false){
      cuenta.shift(1.50)
  }
}
       
function check02(){
  if(document.getElementById("RADIO2").checked==true){
    cuenta.push(1.25);
}else if(document.getElementById("RADIO2").checked==false){
   cuenta.shift(1.25)
}

}
function check03(){
  if(document.getElementById("RADIO3").checked==true){
    cuenta.push(1.75);
}else if(document.getElementById("RADIO3").checked==false){
   cuenta.shift(1.75)
}
}
function check04(){
  if(document.getElementById("RADIO4").checked==true){
    cuenta.push(1.50);
}else if(document.getElementById("RADIO4").checked==false){
   cuenta.shift(1.50)
}
}
function check05(){
  if(document.getElementById("RADIO5").checked==true){
    cuenta.push(1.25);
}else if(document.getElementById("RADIO5").checked==false){
   cuenta.shift(1.25)
}}
function check06(){
  if(document.getElementById("RADIO6").checked==true){
    cuenta.push(1.50);
}else if(document.getElementById("RADIO6").checked==false){
   cuenta.shift(1.50)
}
}
function check07(){
  if(document.getElementById("RADIO7").checked==true){
    cuenta.push(1.25);
}else if(document.getElementById("RADIO7").checked==false){
   cuenta.shift(1.25)
}
}
function check08(){
  if(document.getElementById("RADIO8").checked==true){
    cuenta.push(1.00);
}else if(document.getElementById("RADIO8").checked==false){
   cuenta.shift(1.00)
}
}
function check09(){
  if(document.getElementById("RADIO9").checked==true){
    cuenta.push(0.50);
}else if(document.getElementById("RADIO9").checked==false){
   cuenta.shift(0.50)
}
}
function check10(){
  if(document.getElementById("RADIO10").checked==true){
    cuenta.push(1.25);
}else if(document.getElementById("RADIO10").checked==false){
   cuenta.shift(1.25)
}
}
 //total

function total(){
 try{
    var suma = 0;
    for (var i =0; i <cuenta.length; i++){
      suma += cuenta[i];
    }
    document.getElementById("total").value = suma;
    document.getElementById("p3").innerHTML= suma;
  }
  catch(e){

  } 
}



//FUNCION DE TECLAS
 document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "e") {
      alert("Comentarios Activados")
       document.getElementById("archivo").style.display = 'block';
    }
});
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "s") {
    alert("Para desactivar los comentarios use control+s")
     document.getElementById("archivo").style.display = 'none';
  }
});

//VENTANA EMERGENTE

function ventana(){
  document.getElementById("ventana").style.display = 'block';
  alert("vetana total")
}
function ventanaClose(){
  document.getElementById("ventana").style.display = 'none';
}


function Mostrar(){
  var a = document.getElementById("exampleFormControlTextarea1").value;
  document.getElementById("resultado").innerHTML= a;
}
 



 }



  
