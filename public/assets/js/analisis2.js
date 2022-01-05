
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
generar =()=>{
  var arr=[];
  for(i=0;i<52;i++){
    arr[i]=i;
  }return arr;
}
  ///*Genero las cartas */
  veces = 0;
  mascartax = () => {
    var posc = generar()
    var arrayx = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
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
    return {arrayx:arrayx, tipos:tipos}
  }  
  sessionStorage.i = 0;
 
  ordenar = () => {
  id=[11,12,13,14,15,16,17,18,19,110,111,112,113,21,22,23,24,25,26,27,28,29,210,211,212,213,31,32,33,34,35,36,37,38,39,310,311,312,313,41,42,43,44,45,46,47,48,49,410,411,412,413]
veces=veces+1;
document.getElementById("exe").innerHTML=veces; var z=0;
cartas= orden();
c1 = cartas.array;
tipo =cartas.tipos; 
  accionBaraja();
  for(i=0;i<52;i++){
    if(Number.isInteger(c1[i])==true||c1[i]=='A'){
      if(tipo[i]==1){
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazon.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i] +"</h4>"
      }else if(tipo[i]==2){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebol.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i] +"</h4>"
      }else if(tipo[i]==3){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamante.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i] +"</h4>"
      }else if(tipo[i]==4){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/negras.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i]+"</h4>"
      }
      }else{ 
      if(tipo[i]==1){
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazonb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i]+"</h4>"
      }else if(tipo[i]==2){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebolb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i]+"</h4>"
      }else if(tipo[i]==3){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i]+"</h4>"
      }else if(tipo[i]==4){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/negrasb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+c1[i]+"</h4>"
      }
      }
  }
}
var auxBg="";
var auxNum=0;
find = () => {
  ultimoid="413";
  posc= shufflx( generar());
    	ids=	[11,12,13,14,15,16,17,18,19,110,111,112,113,21,22,23,24,25,26,27,28,29,210,211,212,213,31,32,33,34,35,36,37,38,39,310,311,312,313,41,42,43,44,45,46,47,48,49,410,411,412,413]
    id=shufflx(ids);
    veces=veces+1;document.getElementById("exe").innerHTML=veces; var z=0;
    var arrax = [{"numero": "A",  "tipo": "1", },{"numero": "2",  "tipo": "1", },{"numero": "3",  "tipo": "1", },{"numero": "4",  "tipo": "1", },{"numero": "5",  "tipo": "1", },{"numero": "6",  "tipo": "1", },{"numero": "7",  "tipo": "1", },{"numero": "8",  "tipo": "1", },{"numero": "9",  "tipo": "1", },{"numero": "10",  "tipo": "1", },{"numero": "J",  "tipo": "1", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "1", },{"numero": "A",  "tipo": "2", },{"numero": "2",  "tipo": "2", },{"numero": "3",  "tipo": "2", },{"numero": "4",  "tipo": "2", },{"numero": "5",  "tipo": "2", },{"numero": "6",  "tipo": "2", },{"numero": "7",  "tipo": "2", },{"numero": "8",  "tipo": "2", },{"numero": "9",  "tipo": "2", },{"numero": "10",  "tipo": "2", },{"numero": "J",  "tipo": "2", },{"numero": "Q",  "tipo": "2", },{"numero": "K",  "tipo": "2", },{"numero": "A",  "tipo": "3", },{"numero": "2",  "tipo": "3", },{"numero": "3",  "tipo": "3", },{"numero": "4",  "tipo": "3", },{"numero": "5",  "tipo": "3", },{"numero": "6",  "tipo": "3", },{"numero": "7",  "tipo": "3", },{"numero": "8",  "tipo": "3", },{"numero": "9",  "tipo": "3", },{"numero": "10",  "tipo": "3", },{"numero": "J",  "tipo": "3", },{"numero": "Q",  "tipo": "3", },{"numero": "K",  "tipo": "3", },{"numero": "A",  "tipo": "4", },{"numero": "2",  "tipo": "4", },{"numero": "3",  "tipo": "4", },{"numero": "4",  "tipo": "4", },{"numero": "5",  "tipo": "4", },{"numero": "6",  "tipo": "4", },{"numero": "7",  "tipo": "4", },{"numero": "8",  "tipo": "4", },{"numero": "9",  "tipo": "4", },{"numero": "10",  "tipo": "4", },{"numero": "J",  "tipo": "4", },{"numero": "Q",  "tipo": "4", },{"numero": "K",  "tipo": "4", }, ]
    nums=["A","1","2","3","4","5","6","7","8","9","10"];
    accionBaraja();
  for(i=0;i<122;i++){ 
if(id[i]==ultimoid){
    if(nums.includes(`${arrax[i].numero}`)==true){ //Si es número: esto para mostrar la imagen para nùmeros
      if(`${arrax[i].tipo}`=="1"){ //Si es Corazón rojo
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazon.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px' > "+` ${arrax[i].numero}`+"</h4>"
      auxBg="url('images/corazon.png')";
      auxNum=arrax[i].numero;
      }else if(`${arrax[i].tipo}`=="2"){//Si es Trebol
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebol.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/trebol.png')";
      auxNum=arrax[i].numero;  
    }else if(`${arrax[i].tipo}`=="3"){//Si es Diamante
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamante.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/diamante.png')";
      auxNum=arrax[i].numero;  
    }else if(`${arrax[i].tipo}`=="4"){ //Si es Negras
      document.getElementById(id[i]).style.backgroundImage = "url('images/negras.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/negras.png')";
      auxNum=arrax[i].numero;    
    }

      }
      else{ //Si es número: esto para mostrar la imagen para J,Q,K,A
      if(`${arrax[i].tipo}`=="1"){ //Si es Corazón rojo
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazonb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/corazonb.png')";
      auxNum=arrax[i].numero;  
    }else if(`${arrax[i].tipo}`=="2"){
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebolb.png')"; //Si es Trebol
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/trebolb.png')";
      auxNum=arrax[i].numero; 
    }else if(`${arrax[i].tipo}`=="3"){
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";//Si es Diamante
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/diamanteb.png')";
      auxNum=arrax[i].numero; 
    }else if(`${arrax[i].tipo}`=="4"){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/negrasb.png')";//Si es Negras
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      auxBg="url('images/negrasb.png')";
      auxNum=arrax[i].numero; 
    }
      } 
      return {auxNum:auxNum, auxBg:auxBg}
  }}
} 

ordenar2 = () => {
  
  posc= shufflx( generar());
    	ids=	[11,12,13,14,15,16,17,18,19,110,111,112,113,21,22,23,24,25,26,27,28,29,210,211,212,213,31,32,33,34,35,36,37,38,39,310,311,312,313,41,42,43,44,45,46,47,48,49,410,411,412,413]
    id=shufflx(ids);
    veces=veces+1;document.getElementById("exe").innerHTML=veces; var z=0;
    var arrax = [{"numero": "A",  "tipo": "1", },{"numero": "2",  "tipo": "1", },{"numero": "3",  "tipo": "1", },{"numero": "4",  "tipo": "1", },{"numero": "5",  "tipo": "1", },{"numero": "6",  "tipo": "1", },{"numero": "7",  "tipo": "1", },{"numero": "8",  "tipo": "1", },{"numero": "9",  "tipo": "1", },{"numero": "10",  "tipo": "1", },{"numero": "J",  "tipo": "1", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "1", },{"numero": "A",  "tipo": "2", },{"numero": "2",  "tipo": "2", },{"numero": "3",  "tipo": "2", },{"numero": "4",  "tipo": "2", },{"numero": "5",  "tipo": "2", },{"numero": "6",  "tipo": "2", },{"numero": "7",  "tipo": "2", },{"numero": "8",  "tipo": "2", },{"numero": "9",  "tipo": "2", },{"numero": "10",  "tipo": "2", },{"numero": "J",  "tipo": "2", },{"numero": "Q",  "tipo": "2", },{"numero": "K",  "tipo": "2", },{"numero": "A",  "tipo": "3", },{"numero": "2",  "tipo": "3", },{"numero": "3",  "tipo": "3", },{"numero": "4",  "tipo": "3", },{"numero": "5",  "tipo": "3", },{"numero": "6",  "tipo": "3", },{"numero": "7",  "tipo": "3", },{"numero": "8",  "tipo": "3", },{"numero": "9",  "tipo": "3", },{"numero": "10",  "tipo": "3", },{"numero": "J",  "tipo": "3", },{"numero": "Q",  "tipo": "3", },{"numero": "K",  "tipo": "3", },{"numero": "A",  "tipo": "4", },{"numero": "2",  "tipo": "4", },{"numero": "3",  "tipo": "4", },{"numero": "4",  "tipo": "4", },{"numero": "5",  "tipo": "4", },{"numero": "6",  "tipo": "4", },{"numero": "7",  "tipo": "4", },{"numero": "8",  "tipo": "4", },{"numero": "9",  "tipo": "4", },{"numero": "10",  "tipo": "4", },{"numero": "J",  "tipo": "4", },{"numero": "Q",  "tipo": "4", },{"numero": "K",  "tipo": "4", }, ]
    nums=["A","1","2","3","4","5","6","7","8","9","10"];
    accionBaraja();
  for(i=0;i<122;i++){ 
    if(nums.includes(`${arrax[i].numero}`)==true){ 
      if(`${arrax[i].tipo}`=="1"){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazon.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+` ${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="2"){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebol.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="3"){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamante.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="4"){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/negras.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }
      }else{ 
      if(`${arrax[i].tipo}`=="1"){
      document.getElementById(id[i]).style.backgroundImage = "url('images/corazonb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="2"){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/trebolb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="3"){
        
      document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else if(`${arrax[i].tipo}`=="4"){ 
      document.getElementById(id[i]).style.backgroundImage = "url('images/negrasb.png')";
      document.getElementById(id[i]).innerHTML ="<h4 class='text-dark' style='padding-top:10px'>"+`${arrax[i].numero}`+"</h4>"
      }else{alert("FUERA deL IF ELSE")}
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
    var arrayx = [{"numero": "A",  "tipo": "1", },{"numero": "2",  "tipo": "1", },{"numero": "3",  "tipo": "1", },{"numero": "4",  "tipo": "1", },{"numero": "5",  "tipo": "1", },{"numero": "6",  "tipo": "1", },{"numero": "7",  "tipo": "1", },{"numero": "8",  "tipo": "1", },{"numero": "9",  "tipo": "1", },{"numero": "10",  "tipo": "1", },{"numero": "J",  "tipo": "1", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "1", },{"numero": "A",  "tipo": "2", },{"numero": "2",  "tipo": "2", },{"numero": "3",  "tipo": "2", },{"numero": "4",  "tipo": "2", },{"numero": "5",  "tipo": "2", },{"numero": "6",  "tipo": "2", },{"numero": "7",  "tipo": "2", },{"numero": "8",  "tipo": "2", },{"numero": "9",  "tipo": "2", },{"numero": "10",  "tipo": "2", },{"numero": "J",  "tipo": "2", },{"numero": "Q",  "tipo": "2", },{"numero": "K",  "tipo": "2", },{"numero": "A",  "tipo": "3", },{"numero": "2",  "tipo": "3", },{"numero": "3",  "tipo": "3", },{"numero": "4",  "tipo": "3", },{"numero": "5",  "tipo": "3", },{"numero": "6",  "tipo": "3", },{"numero": "7",  "tipo": "3", },{"numero": "8",  "tipo": "3", },{"numero": "9",  "tipo": "3", },{"numero": "10",  "tipo": "3", },{"numero": "J",  "tipo": "3", },{"numero": "Q",  "tipo": "3", },{"numero": "K",  "tipo": "3", },{"numero": "A",  "tipo": "4", },{"numero": "2",  "tipo": "4", },{"numero": "3",  "tipo": "4", },{"numero": "4",  "tipo": "4", },{"numero": "5",  "tipo": "4", },{"numero": "6",  "tipo": "4", },{"numero": "7",  "tipo": "4", },{"numero": "8",  "tipo": "4", },{"numero": "9",  "tipo": "4", },{"numero": "10",  "tipo": "4", },{"numero": "J",  "tipo": "4", },{"numero": "Q",  "tipo": "1", },{"numero": "K",  "tipo": "4", }, ]
    var tipos = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4];
    var array= ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K','A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  return {array:array, tipos:tipos}
} 
tour = () =>{
  for (let i = 0; i < 13; i++) {
    document.getElementById(id[i+1]).style.backgroundImage = "url('images/diamanteb.png')"; 
  }
  document.getElementById(id[i]).style.backgroundImage = "url('images/diamanteb.png')";
} 
llenarpilas = () =>{
  var g1=[], g2=[], g3=[], g4=[], g5=[], g6=[], g7=[], g8=[], g9=[], g10=[], g11=[], g12=[], g13=[];
  var t1=[], t2=[], t3=[], t4=[], t5=[], t6=[], t7=[], t8=[], t9=[], t10=[], t11=[], t12=[], t13=[];
}