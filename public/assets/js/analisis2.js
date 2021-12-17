
 mascartas= () => { 
  var arrayx = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  var i, j, k;
  for (i = arrayx.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = arrayx[i - 1]; 
    arrayx[i - 1] = arrayx[j];
    arrayx[j] = k;
  }
  return arrayx
} 
generarcartas = () =>{
  c1=mascartas();
  c2=mascartas();
  c3=mascartas();
  c4=mascartas();
  accionBaraja();
  
  veces=veces+1;
  document.getElementById("exe").innerHTML=veces; 
  clase=""; 
  var aux=0;
  var i=0;
  var j=0; 
  while(j<13){ 
      id="1"+(j+1); 
      id2="2"+(j+1);
      id3="3"+(j+1);
      id4="4"+(j+1);
      if(aux==0){ 
        if(Number.isInteger(c1[j])==true||c1[j]=='A'){
        document.getElementById(id).style.backgroundImage = "url('images/corazon.png')";
        document.getElementById(id).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[j]+"</h4>"
        }else{ 
        document.getElementById(id).style.backgroundImage = "url('images/corazonb.png')";
        document.getElementById(id).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[j]+"</h4>"
        }
        if(j==12){
          aux=1;j=-1;
        }
      } 
      if(aux==1){ 
        if(Number.isInteger(c2[j])==true||c2[j]=='A'){
        document.getElementById(id2).style.backgroundImage = "url('images/negras.png')";
        document.getElementById(id2).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c2[j]+"</h4>"
        }else{ 
        document.getElementById(id2).style.backgroundImage = "url('images/negrasb.png')";
        document.getElementById(id2).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c2[j]+"</h4>"
        }
        if(j==12){
          aux=2;j=-1;
        }
      } 
      if(aux==2){ 
        if(Number.isInteger(c3[j])==true||c3[j]=='A'){
        document.getElementById(id3).style.backgroundImage = "url('images/diamante.png')";
        document.getElementById(id3).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c3[j]+"</h4>"
        
        }else{ 
        document.getElementById(id3).style.backgroundImage = "url('images/diamanteb.png')";
        document.getElementById(id3).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c3[j]+"</h4>"
        }
        if(j==12){
          aux=3;j=-1;
        }
      } 
      if(aux==3){ 
        if(Number.isInteger(c4[j])==true||c4[j]=='A'){
        document.getElementById(id4).style.backgroundImage = "url('images/trebol.png')";
        document.getElementById(id4).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c4[j]+"</h4>"
        if(j==12){
        sessionStorage.i = 0;
        }
        }else{ 
        document.getElementById(id4).style.backgroundImage = "url('images/trebolb.png')";
        document.getElementById(id4).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c4[j]+"</h4>"
        }
        if(j==12){
          aux=4; 
        }
      } 
    j=j+1;
    } 
} 

while (z < 52) {
  if (Number.isInteger(c1[z]) == true || c1[z] == 'A') {
    document.getElementsByName(z)[1].innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[z] + "</h4>";
  } else {
    document.getElementsByName(z)[1].style.backgroundImage = "url('images/negrasb.png')";
    document.getElementsByName(z)[1].innerHTML = "<h4 class='text-dark' style='padding-top:10px'>" + c1[z] + "</h4>";
  }
  z = z + 1;
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
    var arrayx = [{"numero": "A",  "tipo": "1", },{"numero": "2",  "tipo": "1", },{"numero": "3",  "tipo": "1", },{"numero": "4",  "tipo": "1", },{"numero": "5",  "tipo": "1", },{"numero": "6",  "tipo": "1", },{"numero": "7",  "tipo": "1", },{"numero": "8",  "tipo": "1", },{"numero": "9",  "tipo": "1", },{"numero": "10",  "tipo": "1", },{"numero": "J",  "tipo": "1", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "1", },{"numero": "A",  "tipo": "2", },{"numero": "2",  "tipo": "2", },{"numero": "3",  "tipo": "2", },{"numero": "4",  "tipo": "2", },{"numero": "5",  "tipo": "2", },{"numero": "6",  "tipo": "2", },{"numero": "7",  "tipo": "2", },{"numero": "8",  "tipo": "2", },{"numero": "9",  "tipo": "2", },{"numero": "10",  "tipo": "2", },{"numero": "J",  "tipo": "2", },{"numero": "Q",  "tipo": "2", },{"numero": "K",  "tipo": "2", },{"numero": "A",  "tipo": "3", },{"numero": "2",  "tipo": "3", },{"numero": "3",  "tipo": "3", },{"numero": "4",  "tipo": "3", },{"numero": "5",  "tipo": "3", },{"numero": "6",  "tipo": "3", },{"numero": "7",  "tipo": "3", },{"numero": "8",  "tipo": "3", },{"numero": "9",  "tipo": "3", },{"numero": "10",  "tipo": "3", },{"numero": "J",  "tipo": "3", },{"numero": "Q",  "tipo": "3", },{"numero": "K",  "tipo": "3", },{"numero": "A",  "tipo": "4", },{"numero": "2",  "tipo": "4", },{"numero": "3",  "tipo": "4", },{"numero": "4",  "tipo": "4", },{"numero": "5",  "tipo": "4", },{"numero": "6",  "tipo": "4", },{"numero": "7",  "tipo": "4", },{"numero": "8",  "tipo": "4", },{"numero": "9",  "tipo": "4", },{"numero": "10",  "tipo": "4", },{"numero": "J",  "tipo": "4", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "4", }, ]
    var tipos = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4];
    var array= ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  return {array:array, tipos:tipos}
}
  function shuffle() {
    var arrayx = [{"numero": "A",  "tipo": "1", },{"numero": "2",  "tipo": "1", },{"numero": "3",  "tipo": "1", },{"numero": "4",  "tipo": "1", },{"numero": "5",  "tipo": "1", },{"numero": "6",  "tipo": "1", },{"numero": "7",  "tipo": "1", },{"numero": "8",  "tipo": "1", },{"numero": "9",  "tipo": "1", },{"numero": "10",  "tipo": "1", },{"numero": "J",  "tipo": "1", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "1", },{"numero": "A",  "tipo": "2", },{"numero": "2",  "tipo": "2", },{"numero": "3",  "tipo": "2", },{"numero": "4",  "tipo": "2", },{"numero": "5",  "tipo": "2", },{"numero": "6",  "tipo": "2", },{"numero": "7",  "tipo": "2", },{"numero": "8",  "tipo": "2", },{"numero": "9",  "tipo": "2", },{"numero": "10",  "tipo": "2", },{"numero": "J",  "tipo": "2", },{"numero": "Q",  "tipo": "2", },{"numero": "K",  "tipo": "2", },{"numero": "A",  "tipo": "3", },{"numero": "2",  "tipo": "3", },{"numero": "3",  "tipo": "3", },{"numero": "4",  "tipo": "3", },{"numero": "5",  "tipo": "3", },{"numero": "6",  "tipo": "3", },{"numero": "7",  "tipo": "3", },{"numero": "8",  "tipo": "3", },{"numero": "9",  "tipo": "3", },{"numero": "10",  "tipo": "3", },{"numero": "J",  "tipo": "3", },{"numero": "Q",  "tipo": "3", },{"numero": "K",  "tipo": "3", },{"numero": "A",  "tipo": "4", },{"numero": "2",  "tipo": "4", },{"numero": "3",  "tipo": "4", },{"numero": "4",  "tipo": "4", },{"numero": "5",  "tipo": "4", },{"numero": "6",  "tipo": "4", },{"numero": "7",  "tipo": "4", },{"numero": "8",  "tipo": "4", },{"numero": "9",  "tipo": "4", },{"numero": "10",  "tipo": "4", },{"numero": "J",  "tipo": "4", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "4", }, ]
    var tipos = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4];
    var array= ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    
  var currentIndex = array.length, temporaryValue, randomIndex;
  var currentIndex2 = tipos.length, temporaryValue2, randomIndex2;

  // Mientras queden elementos a mezclar...
  while (0 !== currentIndex) {

    // Seleccionar un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 

    // E intercambiarlo con el elemento actual
    temporaryValue = array[currentIndex][currentIndex];
    array[currentIndex][currentIndex] = array[randomIndex][randomIndex];
    array[randomIndex][randomIndex] = temporaryValue;
    // E intercambiarlo con el elemento actual
    temporaryValue2 = tipos[currentIndex][currentIndex];
    tipos[currentIndex][currentIndex] = tipos[randomIndex][randomIndex];
    tipos[randomIndex][randomIndex] = temporaryValue2;
  }

  return {array:array, tipos:tipos}
}
