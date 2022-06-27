var x = 0
var y = 0
var circle_drawn = "";
var rectangle_drawn = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition;

function start(){
    document.getElementById("status").innerText = "system is going to listen your words";
    recognition.start();
}

recognition.onResult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerText = "I heard " + content;
    
    if(content == "circle"){
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerText = "I Started drawing circle";
        circle_drawn = "set"
    }

if(content == "rectangle"){
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerText = "I Started drawing rectangle";
        rectangle_drawn = "set"
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(circle_drawn == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerText = "circle drawn";
        circle_drawn = "";
    }

    if(rectangle_drawn == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerText = "Rectangle drawn";
        rectangle_drawn = "";
    }
}