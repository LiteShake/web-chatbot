
function react() {

    var msg = document.getElementById("msg_field").value ;
    console.log(msg);
}

var btn = document.getElementById("send-btn") ;
btn.addEventListener("click", react) ;