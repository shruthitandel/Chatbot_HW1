exports.handler = async (event,context) => {
    
  //  var val1 = require('querystring').parse(event.key1);
    
    console.log("Hello world"+context);
  //  console.log(val1);
    console.log("Hello world1");
    console.log(event.key1);
    let responsecode;
    
    switch (event.key1) {
    case "Hi":
	case "hi":
	case "hey":
	case "Hey":
        console.log("Hi, How can I help you ?");
        responsecode = "Hi, How can I help you ?"
        break;
    case "Hello":
	case "hello":
         responsecode ="Hello, How are you";
        break;
    case "Who are you":
	case "who are you":
        responsecode = "I am Chatbot";
        break;
     case "Bye":
	 case "bye":
	 case "See you":
	 case "see you":
        responsecode = "See you again";
        break;
     case "Thank you":
	 case "thank you":
	 case "thanks":
	 case "Thanks":
        responsecode = "You are welcome, have a good day!";
        break;  
    case "what is your name":
	case "What's your name":
        responsecode = "I am chatbot";
        break;      
    default:
        responsecode = "Nice, Thank you! Have a good day";
}
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(responsecode)
    };
    return response;
};