let canvas = document.getElementById("canvitas");
let ctx = canvas.getContext("2d")

function linha(x1,y1,x2,y2,cor){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=cor;
    ctx.stroke();
}

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

let retangulo1 ={
    x:10,
    y:10,
    largura:28,
    altura:28,
    cor:"red"
}

function desenha(ret){
    ctx.fillStyle = ret.cor
    ctx.fillRect(ret.x,ret.y,ret.largura,ret.altura)
}
desenha(retangulo1)


let mouse_x=0
let mouse_y=0


function move_ret() {
    retangulo1.x = mouse_x
    retangulo1.y = mouse_y
    if (retangulo1.x+28 < 300 && retangulo1.y+28 < 300 && retangulo1.x > 0 && retangulo1.y > 0) {
        ctx.clearRect(0, 0, 300, 300)
        desenha(retangulo1)
    }
    requestAnimationFrame(move_ret)
}

move_ret()
document.addEventListener("mousemove",function (evento){
    let rect = canvas.getBoundingClientRect();
    mouse_x = evento.clientX - rect.x
    mouse_y = evento.clientY - rect.y
    console.log(mouse_x,mouse_y)


})