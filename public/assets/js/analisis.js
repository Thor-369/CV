var numeros= 1234567890;
detectarclick1 = () => {
    if(click==0){ 
      jugado=false;                      //SI NO HICE NINGUN CLICK  - click en primera puerta
      click = 1;    
      var perdedora = 0;
      if(winner==1){      //Puerta 1 ganadora entonces abre random entre 2 o 3
        perdedora=getRandomInt(2, 4)
      }else if(winner==2){//Puerta 2 ganadora entonces abre 3
        perdedora=3;
      } else{           //Puerta 3 ganadora entonces abre 2
        perdedora=2;
      } 
      var div = document.getElementById(perdedora);
      div.style.webkitTransform = 'rotateY(180deg)';div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)';div.style.transform = 'rotateY(180deg)';
    stats.innerHTML = "Buena elección!"
    setTimeout(function(){stats.innerHTML='Seguro que quieres esa puerta? vuelve a elegir '},800);
 
    }else{                              //SI YA HICE CLICK    - click en primera puerta por segunda vez
      if(jugado==true){ 
        sessionStorage.wins = numWin;
        sessionStorage.loses = numLoss;
        sessionStorage.ratio = ratioValue;
        location.reload();}else{
    if(winner==1){ 
      numWin=(parseInt(1)+parseInt(numWin))*1;jugado=true;
      stats.innerHTML = 'Felicidades!'
      setTimeout(function(){stats.innerHTML='Has ganado un vehículo 0Km'},800);
      }else{ 
        stats.innerHTML = 'Perdiste!'
        numLoss=(parseInt(1)+parseInt(numLoss))*1;jugado=true;
    setTimeout(function(){stats.innerHTML='Solo te ganaste una cabra xD'},800);
      }}
      var div = document.getElementById(1);
      div.style.webkitTransform = 'rotateY(180deg)';div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)';div.style.transform = 'rotateY(180deg)';
    }
  }
  detectarclick2 = () => {
    if(click==0){ 
      jugado=false;                      //SI NO HICE NINGUN CLICK  - en click segunda puerta
      click = 1;    
      var perdedora = 0;
      if(winner==1){      //Puerta 1 ganadora entonces abre 3
        perdedora=3;
      }else if(winner==2){//Puerta 2 ganadora entonces abre random 1 o 3
        if(boolean()==true){
        perdedora=1;}else{perdedora=3}
      } else{           //Puerta 3 ganadora entonces abre 1
        perdedora=1;
      } 
      var div = document.getElementById(perdedora); //Le doy la vuelta a la puerta perdedora RANDOM
      div.style.webkitTransform = 'rotateY(180deg)'; div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)'; div.style.transform = 'rotateY(180deg)'; 
    stats.innerHTML = "Buena elección!"
    setTimeout(function(){stats.innerHTML='Seguro que quieres esa puerta? vuelve a elegir '},800);
 
    }else{                              //SI YA HICE CLICK    - click en segunda puerta por segunda vez
      if(jugado==true){ 
        sessionStorage.wins = numWin;
        sessionStorage.loses = numLoss;
        sessionStorage.ratio = ratioValue;
        location.reload();}else{
    if(winner==2){ 
    stats.innerHTML = 'Felicidades!'
    setTimeout(function(){stats.innerHTML='Has ganado un vehículo 0Km'},800);
    numWin=(parseInt(1)+parseInt(numWin))*1;jugado=true;
      }else{ 
        stats.innerHTML = 'Perdiste!'
        numLoss=(parseInt(1)+parseInt(numLoss))*1;jugado=true;
    setTimeout(function(){stats.innerHTML='Solo te ganaste una cabra xD'},800);
      }}
      var div = document.getElementById(2);
      div.style.webkitTransform = 'rotateY(180deg)';div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)';div.style.transform = 'rotateY(180deg)';

    }
  }
  detectarclick3 = () => {
    if(click==0){
      jugado=false;                       //SI NO HICE NINGUN CLICK  - click en tercera puerta
      click = 1;    
      var perdedora = 0;
      if(winner==1){      //Puerta 1 ganadora entonces abre 2
        perdedora=2
      }else if(winner==2){//Puerta 2 ganadora entonces abre 3
        perdedora=1;
      } else{           //Puerta 3 ganadora entonces abre 1 o 2
        perdedora=getRandomInt(1, 3);
      } 
      var div = document.getElementById(perdedora);
      div.style.webkitTransform = 'rotateY(180deg)';div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)';div.style.transform = 'rotateY(180deg)';

    stats.innerHTML = "Buena elección!"
    setTimeout(function(){stats.innerHTML='Seguro que quieres esa puerta? vuelve a elegir '},800);
 
    }else{                              //SI YA HICE CLICK    - click en tercera puerta por segunda vez
      if(jugado==true){ 
        sessionStorage.wins = numWin;
        sessionStorage.loses = numLoss;
        sessionStorage.ratio = ratioValue;
        location.reload();}else{
    if(winner==3){ 
    stats.innerHTML = 'Felicidades!'
    setTimeout(function(){stats.innerHTML='Has ganado un vehículo 0Km'},800);
    numWin=(parseInt(1)+parseInt(numWin))*1;jugado=true;
      }else{ 
        stats.innerHTML = 'Perdiste!'
        numLoss=(parseInt(1)+parseInt(numLoss))*1;jugado=true;
    setTimeout(function(){stats.innerHTML='Solo te ganaste una cabra xD'},800);
      }}
      var div = document.getElementById(3); 
    div.style.webkitTransform = 'rotateY(180deg)';div.style.mozTransform = 'rotateY(180deg)';div.style.msTransform = 'rotateY(180deg)';div.style.oTransform = 'rotateY(180deg)';div.style.transform = 'rotateY(180deg)';
    }
  } 