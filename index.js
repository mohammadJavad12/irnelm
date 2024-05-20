
var i = 0;
var txt = 'ایرن علم'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */


window.onload = function(){  
  typeWriter();
}


function typeWriter(){
  if (i < txt.length) {
    document.getElementById("nav-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
