
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