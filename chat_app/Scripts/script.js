var btn = document.getElementById("send-btn") ;

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
    botBlock.innerHTML = "I heard it !" ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( botBlock ) ;
}