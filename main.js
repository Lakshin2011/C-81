var canva=document.getElementById("can");

ctx=canva.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="rgb(97, 235, 235)";
ctx.lineWidth=7;
ctx.rect(190,189,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="hsla(194, 79%, 54%, 0.877)";
ctx.lineWidth=7;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=7;
ctx.arc(350,290,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=7;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=7;
ctx.arc(450,290,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=7;
ctx.arc(500,250,40,0,2*Math.PI);
ctx.stroke();