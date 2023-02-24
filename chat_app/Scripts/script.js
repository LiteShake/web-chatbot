import generateReply from "./stella.js";

/*
function getRandomFrom( arr ) {

    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement ;
}

function generateReply( message ) {

    wish_replies = [
        "Hellooo !",
        "Hii !",
        "halloww"
    ] ;
    uniResult = [
        "no", "nah", "Nope", "yeah lol", "sus !", "Yes", "what ?",
        "mm", "lol", "lmao", "No lol"
    ];
    table_replies = [
        "Tables are fragile", 
        "Be careful ! ..Table will break",
        "no you cant break tables like that",
        "You break this 4 legs,\nI'll make sure break your 2"
    ];

    switch ( message ) {

        case "hi" || "hello":
            
            return getRandomFrom(wish_replies) ;
            break;

        case "¯\_(ツ)_/¯" :

            return "¯\_(ツ)_/¯" ;
            break;

        case "(╯°□°）╯︵ ┻━┻" : 

            return `${getRandomFrom(table_replies)} ┬─┬ ノ(＾‿＾ノ)` ;
            break;

        default:
            return getRandomFrom(uniResult) ;
            break ;
    } 
}
*/
function send_msg() {

    
    var msg = document.getElementById("msg_field").value ;
    
    document.getElementById("msg_field").value = ""
    
    console.log(msg) ;
    msg = msg.trim() ;
    if( msg == "" ) {return ;}

    console.log(generateReply( msg ) ) ;

    userBlock = document.createElement('div') ;
    userBlock.className = "usermsg" ;
    userBlock.innerHTML = msg ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( userBlock ) ;

    botBlock = document.createElement('div') ;
    botBlock.className = "botmsg" ;
    botBlock.innerHTML = generateReply( msg ) ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( botBlock ) ;
}

var but = document.getElementById("send-btn")
but.addEventListener('click', send_msg())
