
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

module.exports.reply = generateReply ;
