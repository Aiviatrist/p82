canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent=" ";
var colour="black";
var width=3;
var radius=20;
canvas.addEventListener("mousedown",mo);
function mo(e){
    colour=document.getElementById("color").value;
     width=document.getElementById("width").value;
      radius=document.getElementById("radius").value;
      mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    currentx= e.clientX-canvas.offsetLeft;
    currenty= e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.arc(currentx,currenty,radius,0,2*Math.PI);
        ctx.stroke();
    }
}