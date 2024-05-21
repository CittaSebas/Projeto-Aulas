let canvas = document.getElementById("Canvitas");
let ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.fillStyle="Black"
ctx.font="20px Arial"
ctx.fillText("Canvitas",100,50)
ctx.stroke();


// Retangulos/Quadrados //

function caixa(cor,x,y,w,h){
    ctx.fillStyle=cor
    ctx.fillRect(x,y,w,h)
}

caixa("black",275,250,50,50)
caixa("black",250,275,25,25)

caixa("yellow",0,250,25,50)
caixa("yellow",0,275,50,25)

caixa("blue",0,0,50,50)
caixa("red",250,0,50,50)

caixa("cyan",0,125,25,50)
caixa("cyan",275,137.5,25,25)

caixa("red",110,150,40,40)

// Final R/Q //
// Circolo //

function circulo(x,y,r,s,e,cors,corf){
    ctx.beginPath();
    ctx.fillStyle=corf;
    ctx.arc(x,y,r,s,e);
    ctx.strokeStyle=cors;
    ctx.fill();
    ctx.stroke();
}

circulo(150,150,60,Math.PI,2*Math.PI,"green","transparent")
circulo(150,150,80,Math.PI,1.25*Math.PI,"green","transparent")
circulo(150,150,80,1.75*Math.PI,2*Math.PI,"green","transparent")

circulo(150,115,15,0,2*Math.PI,"blue","cyan")

circulo(75,200,15,0,2*Math.PI,"green","yellow")
circulo(225,200,15,0,2*Math.PI,"green","yellow")

circulo(150,300,45,0,2*Math.PI,"green","cyan")

circulo(150,300,90,0,1.5*Math.PI,"green","transparent")
circulo(150,300,70,1.5*Math.PI,2*Math.PI,"green","transparent")

// Final Circolo //
// Linhas //

function linha(x1,y1,x2,y2,cor){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=cor;
    ctx.stroke();
}

linha(0,0,150,150,"blue")
linha(300,0,150,150,"red")
linha(0,150,300,150,"green")
linha(150,150,150,255,"black")

linha(0,0,0,300,"black")
linha(0,0,0,300,"black")
linha(0,0,0,300,"black")
linha(0,0,300,0,"black")
linha(0,0,300,0,"black")
linha(0,0,300,0,"black")
linha(0,300,300,300,"black")
linha(0,300,300,300,"black")
linha(0,300,300,300,"black")
linha(300,0,300,300,"black")
linha(300,0,300,300,"black")
linha(300,0,300,300,"black")



// Final Linhas //