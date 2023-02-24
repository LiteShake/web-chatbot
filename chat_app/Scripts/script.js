import { reply } from './stella.js';

function send_msg() {

    var msg = document.getElementById("msg_field").value ;

    document.getElementById("msg_field").value = ""

    console.log(msg) ;
    msg = msg.trim() ;
    if( msg == "" ) {return ;}

    userBlock = document.createElement('div') ;
    userBlock.className = "usermsg" ;
    userBlock.innerHTML = msg ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( userBlock ) ;

    botBlock = document.createElement('div') ;
    botBlock.className = "botmsg" ;
    botBlock.innerHTML = reply( msg ) ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( botBlock ) ;
}

$("msg_field").keyup(function(event) {

    if(event.keyCode === 13) {
        $("#send-btn").click() ;
    }
});
