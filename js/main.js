function startTime(){
  var today = new Date();
  var hour = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = "Now it's exactly: "+hour+" hours";
  t = setTimeout('startTime()', 500);
  
  function checkTime(i){
    if(i<10){
      i = "0" + i;
    }
    return i
  }
  
  function carrega(){
    if(hour >= 0 && hour < 12){
      img.src = 'img/floppa1.jpg';
      document.body.style.background = '#FF7373';
    }else if(hour >= 12 && hour < 18){
      img.src = 'img/floppa2.jpg';
      document.body.style.background = '#D187D8';
    }else{
      img.src = 'img/floppa3.jpg';
      document.body.style.background = '#9499D1';
    }
  }
}