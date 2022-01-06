
function shufflx(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//Generar posciciones
generar = () => {
  var arr = [];
  for (i = 0; i < 52; i++) {
    arr[i] = i;
  } return arr;
}
///*Genero las cartas */
veces = 0;
mascartax = () => {
  var posc = generar()
  var arrayx = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var i, j, k;
  var currentIndex = array.length, temporaryValue, randomIndex;
  for (i = arrayx.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = arrayx[i - 1];

    // E intercambiarlo con el elemento actual
    temporaryValue = arrayx[currentIndex];
    arrayx[currentIndex] = arrayx[randomIndex];
    arrayx[randomIndex] = temporaryValue;

    tipos[i - 1] = tipos[j];
    arrayx[i - 1] = arrayx[j];
    arrayx[j] = k;
  }
  return { arrayx: arrayx, tipos: tipos }
}
sessionStorage.i = 0;

ordenar = () => {
  id = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110, 111, 112, 113, 21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 212, 213, 31, 32, 33, 34, 35, 36, 37, 38, 39, 310, 311, 312, 313, 41, 42, 43, 44, 45, 46, 47, 48, 49, 410, 411, 412, 413]
  veces = veces + 1;
  document.getElementById("exe").innerHTML = veces; var z = 0;
  cartas = orden();
  c1 = cartas.array;
  tipo = cartas.tipos;
  accionBaraja();
  for (i = 0; i < 52; i++) {
    if (Number.isInteger(c1[i]) == true || c1[i] == 'A') {
      if (tipo[i] == 1) {
        document.getElementById(id[i]).style.backgroundImage = "url('images/corazon.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 2) {

        document.getElementById(id[i]).style.backgroundImage = "url('images/trebol.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 3) {

        document.getElementById(id[i]).style.backgroundImage = "url('images/diamante.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 4) {
        document.getElementById(id[i]).style.backgroundImage = "url('images/negras.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      }
    } else {
      if (tipo[i] == 1) {
        document.getElementById(id[i]).style.backgroundImage = "url('images/corazonb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 2) {

        document.getElementById(id[i]).style.backgroundImage = "url('images/trebolb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 3) { 
        document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      } else if (tipo[i] == 4) {
        document.getElementById(id[i]).style.backgroundImage = "url('images/negrasb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[i] + "</h4>"
      }
    }
  }
}

next =()=>{

}
var html="";
show =()=>{
  for (let i = 0; i < 13; i++) {   
   if (i==0) { 
    for (let j = 0; j < 4; j++) {   
      carta="<div class='carta'> <div style='background-image: url"+t1[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id1[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n1[j]+" </p></div></div>";
      html=html+carta+" ";  
      document.getElementById("g"+(i+1)).innerHTML=html; 
    }  
    html=""; 
   }
   else if(i==1) {
    for (let j = 0; j < 4; j++) {  
      carta="<div class='carta'> <div style='background-image: url"+t2[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id2[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n2[j]+" </p></div></div>";
      html=html+carta+"</br>";  
      document.getElementById("g"+(i+1)).innerHTML=html; 
    } 
    html=""; 
     } else if(i==2) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t3[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id3[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n3[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
    html=""; 
     } else if(i==3) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t4[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id4[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n4[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
    html=""; 
     } else if(i==4) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t5[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id5[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n5[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
    html=""; 
     } else if(i==5) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t6[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id6[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n6[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==6) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t7[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id7[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n7[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==7) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t8[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id8[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n8[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==8) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t9[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id9[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n9[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==9) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t10[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id10[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n10[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==10) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t11[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id11[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n11[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
        
    html=""; 
     } else if(i==11) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t12[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id12[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n12[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
        
      html=""; 
        
     } else if(i==12) {
      for (let j = 0; j < 4; j++) {  
        carta="<div class='carta'> <div style='background-image: url"+t13[j]+"' class='cara cardx  text-center text-white mx-auto img-fluid ' id='"+id13[j]+"' name='1'><p class='text-dark' style='padding-top: 30px;padding-bottom: 30px;'>"+n13[j]+" </p></div></div>";
        html=html+carta+"</br>";  
        document.getElementById("g"+(i+1)).innerHTML=html; 
      } 
      html=""; 
        
     }  
  }
  document.getElementById("dialogo").innerHTML="Ahora, selecciona la carta de en medio para continuar"; 
   n1 = [], n2 = [], n3 = [], n4 = [], n5 = [], n6 = [], n7 = [], n8 = [], n9 = [], n10 = [], n11 = [], n12 = [], n13 = [];
   t1 = [], t2 = [], t3 = [], t4 = [], t5 = [], t6 = [], t7 = [], t8 = [], t9 = [], t10 = [], t11 = [], t12 = [], t13 = [];
   id1 = [], id2 = [], id3 = [], id4 = [], id5 = [], id6 = [], id7 = [], id8 = [], id9 = [], id10 = [], id11 = [], id12 = [], id13 = [];
  
}


//Montos
var auxTp = "";
var auxNum = 0;
var n1 = [], n2 = [], n3 = [], n4 = [], n5 = [], n6 = [], n7 = [], n8 = [], n9 = [], n10 = [], n11 = [], n12 = [], n13 = [];
var t1 = [], t2 = [], t3 = [], t4 = [], t5 = [], t6 = [], t7 = [], t8 = [], t9 = [], t10 = [], t11 = [], t12 = [], t13 = [];
var id1 = [], id2 = [], id3 = [], id4 = [], id5 = [], id6 = [], id7 = [], id8 = [], id9 = [], id10 = [], id11 = [], id12 = [], id13 = [];
var ultimaCarta=""; 
var exe=0;
find = () => { 
  exe=exe+1;
  document.getElementById("exe").innerHTML=exe;
  nums=["A","1","2","3","4","5","6","7","8","9","10"];
  var ids = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110, 111, 112, 113, 21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 212, 213, 31, 32, 33, 34, 35, 36, 37, 38, 39, 310, 311, 312, 313, 41, 42, 43, 44, 45, 46, 47, 48, 49, 410, 411, 412, 413]
  var id = shufflx(ids); 
  var arraxx = [{ "numero": "A", "tipo": "1", }, { "numero": "2", "tipo": "1", }, { "numero": "3", "tipo": "1", }, { "numero": "4", "tipo": "1", }, { "numero": "5", "tipo": "1", }, { "numero": "6", "tipo": "1", }, { "numero": "7", "tipo": "1", }, { "numero": "8", "tipo": "1", }, { "numero": "9", "tipo": "1", }, { "numero": "10", "tipo": "1", }, { "numero": "J", "tipo": "1", }, { "numero": "Q", "tipo": "1", }, { "numero": "K", "tipo": "1", }, { "numero": "A", "tipo": "2", }, { "numero": "2", "tipo": "2", }, { "numero": "3", "tipo": "2", }, { "numero": "4", "tipo": "2", }, { "numero": "5", "tipo": "2", }, { "numero": "6", "tipo": "2", }, { "numero": "7", "tipo": "2", }, { "numero": "8", "tipo": "2", }, { "numero": "9", "tipo": "2", }, { "numero": "10", "tipo": "2", }, { "numero": "J", "tipo": "2", }, { "numero": "Q", "tipo": "2", }, { "numero": "K", "tipo": "2", }, { "numero": "A", "tipo": "3", }, { "numero": "2", "tipo": "3", }, { "numero": "3", "tipo": "3", }, { "numero": "4", "tipo": "3", }, { "numero": "5", "tipo": "3", }, { "numero": "6", "tipo": "3", }, { "numero": "7", "tipo": "3", }, { "numero": "8", "tipo": "3", }, { "numero": "9", "tipo": "3", }, { "numero": "10", "tipo": "3", }, { "numero": "J", "tipo": "3", }, { "numero": "Q", "tipo": "3", }, { "numero": "K", "tipo": "3", }, { "numero": "A", "tipo": "4", }, { "numero": "2", "tipo": "4", }, { "numero": "3", "tipo": "4", }, { "numero": "4", "tipo": "4", }, { "numero": "5", "tipo": "4", }, { "numero": "6", "tipo": "4", }, { "numero": "7", "tipo": "4", }, { "numero": "8", "tipo": "4", }, { "numero": "9", "tipo": "4", }, { "numero": "10", "tipo": "4", }, { "numero": "J", "tipo": "4", }, { "numero": "Q", "tipo": "4", }, { "numero": "K", "tipo": "4", },]
  var arrax = shufflx(arraxx); 
  var auxid ="";
 var auxTp = "";
 var auxNum = 0; 

  for (let q = 0; q < 52; q++) {  
    //auxid Tomando el id "chocoleado-shufle"; auxTp tomando el tipo "Color"; auxNum Tomando el numero  
   auxid =id[q]; 
   auxNum = arrax[q].numero;  
    if(nums.includes(`${arrax[q].numero}`)==true){ //Si es número: esto para mostrar la imagen para nùmeros
      if(`${arrax[q].tipo}`=="1"){ //Si es Corazón rojo
        auxTp= "(corazon.png);";
      }else if(`${arrax[q].tipo}`=="2"){//Si es Trebol   
        auxTp= "(trebol.png);";
    }else if(`${arrax[q].tipo}`=="3"){//Si es Diamante 
        auxTp= "(diamante.png);"; 
    }else if(`${arrax[q].tipo}`=="4"){ //Si es Negras
        auxTp= "(negras.png);";  
    }
      }
      else{ //Si es número: esto para mostrar la imagen para J,Q,K,A
        if(`${arrax[q].tipo}`=="1"){ //Si es Corazón rojo
          auxTp= "(corazonb.png);";
        }else if(`${arrax[q].tipo}`=="2"){//Si es Trebol   
          auxTp= "(trebolb.png);";
      }else if(`${arrax[q].tipo}`=="3"){//Si es Diamante 
          auxTp= "(diamanteb.png);"; 
      }else if(`${arrax[q].tipo}`=="4"){ //Si es Negras
          auxTp="(negrasb.png);";  
      }
      }  
    if (between(q, 0, 3)) { 
      id1.push(auxid);  
      n1.push(auxNum); 
      t1.push(auxTp);  

    }  if (between(q, 3, 7)) {
      id2.push(auxid);  
      n2.push(auxNum); 
      t2.push(auxTp);  

    } if (between(q, 7, 11)) {
      id3.push(auxid);  
      n3.push(auxNum); 
      t3.push(auxTp);  
      
    } if (between(q, 11, 15)) {
      id4.push(auxid);  
      n4.push(auxNum); 
      t4.push(auxTp);  
      
    } if (between(q, 15,19 )) {
      id5.push(auxid);  
      n5.push(auxNum); 
      t5.push(auxTp);  
      
    } if (between(q, 19, 23)) {
      id6.push(auxid);  
      n6.push(auxNum); 
      t6.push(auxTp);  
      
    } if (between(q, 23, 27)) {
      id7.push(auxid);  
      n7.push(auxNum); 
      t7.push(auxTp);  
      
    } if (between(q, 27, 31)) {
      id8.push(auxid);  
      n8.push(auxNum); 
      t8.push(auxTp);  
      
    } if (between(q, 31, 35)) {
      id9.push(auxid);  
      n9.push(auxNum); 
      t9.push(auxTp);  
      
    } if (between(q, 35, 39)) {
      id10.push(auxid);  
      n10.push(auxNum); 
      t10.push(auxTp);  
      
    } if (between(q, 39, 43)) {
      id11.push(auxid);  
      n11.push(auxNum); 
      t11.push(auxTp);  
      
    } if (between(q, 43, 47)) {
      id12.push(auxid);  
      n12.push(auxNum); 
      t12.push(auxTp);  
      
    } if (between(q, 47, 51)) {
      id13.push(auxid);  
      n13.push(auxNum); 
      t13.push(auxTp);   
    } 

  } 
  
  ultimaCarta=id13[3];
  show();
  //Hacer funcion para poner aqui que se ejecute luego de 0 segundos y muestre todas las cartas 
  // auxsegundos=aumento en 1 por cada posibilidad, si estancamiento, no aumento, muere, fin xd 
  //luego de 1 segundo muestra solo la primera 
 //luego de 2 segundos - movimiento - coloca la carta debajo del grupo correspondiente
 // valiendose de funciones: push pop shift swift? 
}
verCartas = () =>{
  alert(n1)
  alert(t1)
}
function between(x, min, max) {
  return x >= min && x <= max;
}
ordenar2 = () => {

  posc = shufflx(generar());
  ids = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110, 111, 112, 113, 21, 22, 23, 24, 25, 26, 27, 28, 29, 210, 211, 212, 213, 31, 32, 33, 34, 35, 36, 37, 38, 39, 310, 311, 312, 313, 41, 42, 43, 44, 45, 46, 47, 48, 49, 410, 411, 412, 413]
  id = shufflx(ids);
  veces = veces + 1; document.getElementById("exe").innerHTML = veces; var z = 0;
  var arrax = [{ "numero": "A", "tipo": "1", }, { "numero": "2", "tipo": "1", }, { "numero": "3", "tipo": "1", }, { "numero": "4", "tipo": "1", }, { "numero": "5", "tipo": "1", }, { "numero": "6", "tipo": "1", }, { "numero": "7", "tipo": "1", }, { "numero": "8", "tipo": "1", }, { "numero": "9", "tipo": "1", }, { "numero": "10", "tipo": "1", }, { "numero": "J", "tipo": "1", }, { "numero": "Q", "tipo": "1", }, { "numero": "K", "tipo": "1", }, { "numero": "A", "tipo": "2", }, { "numero": "2", "tipo": "2", }, { "numero": "3", "tipo": "2", }, { "numero": "4", "tipo": "2", }, { "numero": "5", "tipo": "2", }, { "numero": "6", "tipo": "2", }, { "numero": "7", "tipo": "2", }, { "numero": "8", "tipo": "2", }, { "numero": "9", "tipo": "2", }, { "numero": "10", "tipo": "2", }, { "numero": "J", "tipo": "2", }, { "numero": "Q", "tipo": "2", }, { "numero": "K", "tipo": "2", }, { "numero": "A", "tipo": "3", }, { "numero": "2", "tipo": "3", }, { "numero": "3", "tipo": "3", }, { "numero": "4", "tipo": "3", }, { "numero": "5", "tipo": "3", }, { "numero": "6", "tipo": "3", }, { "numero": "7", "tipo": "3", }, { "numero": "8", "tipo": "3", }, { "numero": "9", "tipo": "3", }, { "numero": "10", "tipo": "3", }, { "numero": "J", "tipo": "3", }, { "numero": "Q", "tipo": "3", }, { "numero": "K", "tipo": "3", }, { "numero": "A", "tipo": "4", }, { "numero": "2", "tipo": "4", }, { "numero": "3", "tipo": "4", }, { "numero": "4", "tipo": "4", }, { "numero": "5", "tipo": "4", }, { "numero": "6", "tipo": "4", }, { "numero": "7", "tipo": "4", }, { "numero": "8", "tipo": "4", }, { "numero": "9", "tipo": "4", }, { "numero": "10", "tipo": "4", }, { "numero": "J", "tipo": "4", }, { "numero": "Q", "tipo": "4", }, { "numero": "K", "tipo": "4", },]
  nums = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  accionBaraja();
  for (i = 0; i < 122; i++) {
    if (nums.includes(`${arrax[i].numero}`) == true) {
      if (`${arrax[i].tipo}` == "1") {
        document.getElementById(id[i]).style.backgroundImage = "url('images/corazon.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + ` ${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "2") {

        document.getElementById(id[i]).style.backgroundImage = "url('images/trebol.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "3") {

        document.getElementById(id[i]).style.backgroundImage = "url('images/diamante.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "4") {
        document.getElementById(id[i]).style.backgroundImage = "url('images/negras.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      }
    } else {
      if (`${arrax[i].tipo}` == "1") {
        document.getElementById(id[i]).style.backgroundImage = "url('images/corazonb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "2") {

        document.getElementById(id[i]).style.backgroundImage = "url('images/trebolb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "3") {

        document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else if (`${arrax[i].tipo}` == "4") {
        document.getElementById(id[i]).style.backgroundImage = "url('images/negrasb.png')";
        document.getElementById(id[i]).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + `${arrax[i].numero}` + "</h4>"
      } else { alert("FUERA deL IF ELSE") }
    }
  }
}
function limpiarSession() {
  sessionStorage.clear();
  localStorage.clear();
  window.open('?', '_self');
}
//FUNCION PARA ACTIVAR EL AUDIO  
function accionBaraja() {
  document.getElementById('cards').play();
}

// FUNCION RANDOM CON RANGO 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function orden() {
  var arrayx = [{ "numero": "A", "tipo": "1", }, { "numero": "2", "tipo": "1", }, { "numero": "3", "tipo": "1", }, { "numero": "4", "tipo": "1", }, { "numero": "5", "tipo": "1", }, { "numero": "6", "tipo": "1", }, { "numero": "7", "tipo": "1", }, { "numero": "8", "tipo": "1", }, { "numero": "9", "tipo": "1", }, { "numero": "10", "tipo": "1", }, { "numero": "J", "tipo": "1", }, { "numero": "Q", "tipo": "1", }, { "numero": "K", "tipo": "1", }, { "numero": "A", "tipo": "2", }, { "numero": "2", "tipo": "2", }, { "numero": "3", "tipo": "2", }, { "numero": "4", "tipo": "2", }, { "numero": "5", "tipo": "2", }, { "numero": "6", "tipo": "2", }, { "numero": "7", "tipo": "2", }, { "numero": "8", "tipo": "2", }, { "numero": "9", "tipo": "2", }, { "numero": "10", "tipo": "2", }, { "numero": "J", "tipo": "2", }, { "numero": "Q", "tipo": "2", }, { "numero": "K", "tipo": "2", }, { "numero": "A", "tipo": "3", }, { "numero": "2", "tipo": "3", }, { "numero": "3", "tipo": "3", }, { "numero": "4", "tipo": "3", }, { "numero": "5", "tipo": "3", }, { "numero": "6", "tipo": "3", }, { "numero": "7", "tipo": "3", }, { "numero": "8", "tipo": "3", }, { "numero": "9", "tipo": "3", }, { "numero": "10", "tipo": "3", }, { "numero": "J", "tipo": "3", }, { "numero": "Q", "tipo": "3", }, { "numero": "K", "tipo": "3", }, { "numero": "A", "tipo": "4", }, { "numero": "2", "tipo": "4", }, { "numero": "3", "tipo": "4", }, { "numero": "4", "tipo": "4", }, { "numero": "5", "tipo": "4", }, { "numero": "6", "tipo": "4", }, { "numero": "7", "tipo": "4", }, { "numero": "8", "tipo": "4", }, { "numero": "9", "tipo": "4", }, { "numero": "10", "tipo": "4", }, { "numero": "J", "tipo": "4", }, { "numero": "Q", "tipo": "1", }, { "numero": "K", "tipo": "4", },]
  var tipos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
  var array = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  return { array: array, tipos: tipos }
}
tour = () => {
  document.getElementById(14).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(18).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(112).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(23).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(27).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(211).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(32).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(36).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(310).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(41).style.backgroundImage = "url('images/diamante.png')";
  document.getElementById(45).style.backgroundImage = "url('images/diamanteb.png')";
  document.getElementById(49).style.backgroundImage = "url('images/diamanteb.png')";
  document.getElementById(413).style.backgroundImage = "url('images/diamanteb.png')";

  document.getElementById(14).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 1 + "</h4>"
  document.getElementById(18).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 2 + "</h4>"
  document.getElementById(112).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 3 + "</h4>"
  document.getElementById(23).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 4 + "</h4>"
  document.getElementById(27).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 5 + "</h4>"
  document.getElementById(211).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 6 + "</h4>"
  document.getElementById(32).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 7 + "</h4>"
  document.getElementById(36).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 8 + "</h4>"
  document.getElementById(310).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 9 + "</h4>"
  document.getElementById(41).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + 10 + "</h4>"
  document.getElementById(45).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + "J" + "</h4>"
  document.getElementById(49).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + "Q" + "</h4>"
  document.getElementById(413).innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + "K" + "</h4>"
  setTimeout(function () {
    document.getElementById(14).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(18).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(112).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(23).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(27).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(211).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(32).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(36).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(310).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(41).style.backgroundImage = "url('images/trebol.png')";
    document.getElementById(45).style.backgroundImage = "url('images/trebolb.png')";
    document.getElementById(49).style.backgroundImage = "url('images/trebolb.png')";
    document.getElementById(413).style.backgroundImage = "url('images/trebolb.png')";
  }, 1000)
  setTimeout(function () {

    document.getElementById(14).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(18).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(112).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(23).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(27).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(211).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(32).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(36).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(310).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(41).style.backgroundImage = "url('images/corazon.png')";
    document.getElementById(45).style.backgroundImage = "url('images/corazonb.png')";
    document.getElementById(49).style.backgroundImage = "url('images/corazonb.png')";
    document.getElementById(413).style.backgroundImage = "url('images/corazonb.png')";
  }, 2000)

  setTimeout(function () {
    document.getElementById(14).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(18).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(112).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(23).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(27).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(211).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(32).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(36).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(310).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(41).style.backgroundImage = "url('images/negras.png')";
    document.getElementById(45).style.backgroundImage = "url('images/negrasb.png')";
    document.getElementById(49).style.backgroundImage = "url('images/negrasb.png')";
    document.getElementById(413).style.backgroundImage = "url('images/negrasb.png')";
  }, 3000)
  setTimeout(function () {
    document.getElementById(14).style.backgroundImage = "url('images/back.png')";
    document.getElementById(18).style.backgroundImage = "url('images/back.png')";
    document.getElementById(112).style.backgroundImage = "url('images/back.png')";
    document.getElementById(23).style.backgroundImage = "url('images/back.png')";
    document.getElementById(27).style.backgroundImage = "url('images/back.png')";
    document.getElementById(211).style.backgroundImage = "url('images/back.png')";
    document.getElementById(32).style.backgroundImage = "url('images/back.png')";
    document.getElementById(36).style.backgroundImage = "url('images/back.png')";
    document.getElementById(310).style.backgroundImage = "url('images/back.png')";
    document.getElementById(41).style.backgroundImage = "url('images/back.png')";
    document.getElementById(45).style.backgroundImage = "url('images/back.png')";
    document.getElementById(49).style.backgroundImage = "url('images/back.png')";
    document.getElementById(413).style.backgroundImage = "url('images/back.png')";
    document.getElementById(14).innerHTML = " "
    document.getElementById(18).innerHTML = " "
    document.getElementById(112).innerHTML = " "
    document.getElementById(23).innerHTML = " "
    document.getElementById(27).innerHTML = " "
    document.getElementById(211).innerHTML = " "
    document.getElementById(32).innerHTML = " "
    document.getElementById(36).innerHTML = " "
    document.getElementById(310).innerHTML = " "
    document.getElementById(41).innerHTML = " "
    document.getElementById(45).innerHTML = " "
    document.getElementById(49).innerHTML = " "
    document.getElementById(413).innerHTML = " "


  }, 5000);
}
llenarpilas = () => {
  var n1 = [], n2 = [], n3 = [], n4 = [], n5 = [], n6 = [], n7 = [], n8 = [], n9 = [], n10 = [], n11 = [], n12 = [], n13 = [];
  var t1 = [], t2 = [], t3 = [], t4 = [], t5 = [], t6 = [], t7 = [], t8 = [], t9 = [], t10 = [], t11 = [], t12 = [], t13 = [];

}