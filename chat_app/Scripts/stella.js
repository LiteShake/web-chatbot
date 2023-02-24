
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

    switch ( message ) {
        case "hi" || "hello":
            
            return getRandomFrom(wish_replies) ;
            break;
        default:
            break;
    }
}

module.ex
