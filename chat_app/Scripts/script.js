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
    
    
    var speed = 80 ;
    var i = 0; 
    
    setTimeout(userWrite, 300) ;

    function userWrite() {
    
        if (i < msg.length) {
        
            userBlock.innerHTML += msg.charAt(i);
            i++;
            setTimeout(userWrite, speed );
        }
    }   



    main_stuff = document.getElementById("main-stuff") ;
    main_stuff.appendChild( userBlock ) ;

    var botBlock = document.createElement('div') ;
    botBlock.className = "botmsg" ;

    var botImg = document.createElement('span') ;
    var botTxt = document.createElement('span') ;
    botTxt.className = "msgtxt"
    
    // botBlock.appendChild( botImg ) ;
    // botBlock.appendChild( botTxt ) ;
    
    var main_stuff = document.getElementById("main-stuff") ;
    
    main_stuff.appendChild( botBlock ) ;
    
    i = 0 ;
    var txt = generateReply( msg ) ;
    console.log( txt ) ;
    
    botWrite() ;

    function botWrite() {
    
        if (i < txt.length) {
        
            botBlock.innerHTML += txt.charAt(i);
            i++;
            setTimeout(botWrite, speed );
        }
    }   
    // botTxt.innerHTML = generateReply( msg ) ;
}

var btn = document.getElementById("send-btn") ;
btn.addEventListener('click', send_msg)
