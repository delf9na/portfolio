
let counter = 0;
let value = 0;
let font,        fontsize = 20;
var no;
var si;
var clicks = 0;
var yadibujebotones = false;
var pregunta = true;
var mispreguntas = ["¿usas internet?", "¿usas redes sociales?", "¿tienes más de un perfil?", "¿conoces personalmente todos tus contactos?", 
"¿has leído términos y condiciones alguna vez?", "¿te desconectas de manera manual alguna vez?", "¿crees que necesitas internet para vivir?","INERTE" ,"INERTE" ,"INERTE" ]
var miscolores = ["red", "green","blue","red", "green","blue","red", "green","blue","red", "green","blue"]
var enquepreguntaestoy = 0;
var enquecolorestoy = 0;
var miBotonSi;
var miBotonNo;

red = (225,0,0);
green = (0,255,0);
blue = (0,0,255);

var w = window.innerWidth;
var h = window.innerHeight;  


var download = document.getElementById("download");

download.addEventListener("click", function () {
    var image = document.getElementById("miCanvas").toDataURL("image/png").replace(/^data:image\/[^;]/, "data:application/octet-stream");
    download.setAttribute("href", image);
});


function setup() {

   createCanvas(w, h);
    frameRate(12);
    textFont("Courier New");
    textSize(fontsize);
    fill(255);
    background(0);
    

}


  

function refreshPage() {
    window.location.reload();
}

function draw() {
  
    textAlign(RIGHT);
    drawWords();
    
}


function drawWords() {
   
   
    if (pregunta === true) {
        fill (miscolores[enquecolorestoy]);
        text(mispreguntas[enquepreguntaestoy], mouseX, mouseY);
    }

    if (pregunta === false && yadibujebotones === false) {

        miBotonNo = createButton('no');
    //    miBotonNo.width="100px";
      //       miBotonNo.height=100;
        miBotonNo.position(mouseX - 100, mouseY + 10);
        miBotonNo.mouseClicked(function () {
            miBotonSi.hide();
            // miBotonSi.style.display= "none";
            pregunta = true;
            enquepreguntaestoy++;
            enquecolorestoy++;
        });
        miBotonSi = createButton('si');
        miBotonSi.position(mouseX - 200, mouseY + 10);
        miBotonSi.mouseClicked(function () {
              miBotonNo.hide();
         //   miBotonNo.style.display(none);
            pregunta = true;
            enquepreguntaestoy++;
            enquecolorestoy++;
        });
        yadibujebotones = true;
    }
}

function mousePressed() {
    if (pregunta === true) {
        pregunta = false;
        yadibujebotones = false;
    } ;
    
  }
    






