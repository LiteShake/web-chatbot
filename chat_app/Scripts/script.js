// import generateReply from "./stella.js";
// import { spawn as spawner } from 'child_process';

function getRandomFrom( arr ) {

    const randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement ;
}

function generateReply( message ) {

    var wish_replies = [
        "Hellooo !",
        "Hii !",
        "halloww"
    ] ;
    var uniResult = [
        "no", "nah", "Nope", "yeah lol", "sus !", "Yes", "what ?",
        "mm", "lol", "lmao", "No lol"
    ];
    var table_replies = [
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

function send_msg() {

    
    var msg = document.getElementById("msg_field").value ;
    
    document.getElementById("msg_field").value = ""
    
    console.log(msg) ;
    msg = msg.trim() ;
    if( msg == "" ) {return ;}

    console.log(generateReply( msg ) ) ;

    var userBlock = document.createElement('div') ;

    userBlock.className = "usermsg" ;
    userBlock.innerHTML = msg ;

    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( userBlock ) ;

    var botBlock = document.createElement('div') ;
    botBlock.className = "botmsg" ;

    var botImg = document.createElement('span') ;
    var botTxt = document.createElement('span') ;
    botTxt.className = "msgtxt"

    botTxt.innerHTML = generateReply( msg ) ;
    
    botBlock.appendChild( botImg ) ;
    botBlock.appendChild( botTxt ) ;
    
    var main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( botBlock ) ;

}

var btn = document.getElementById("send-btn") ;
btn.addEventListener('click', send_msg)
