$(document).ready(function(){
  ajax();
  console.log("ready");
});

function ajax(){
  console.log("Calling");
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200){
      document.getElementById('chatData').innerHTML = req.responseText;
    }
  }
  req.open('GET', 'chat.php', true);
  req.send();
}

setInterval(function(){
  ajax();
},500);
