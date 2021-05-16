const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");


canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function onMouseMove(event){
    // clientX, Y : 윈도우 전체 안에서의 좌표
    // canvas 안에서와 윈도우에서의 좌표값이 다르기 때문에 offsetX,Y 사용하해야함
    const x = event.offsetX;
    const y = event.offsetY; 
    
    if(!painting){
      ctx.beginPath();
      ctx.moveTo(x, y);
    }else{
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  
}

function startPainting(){
  
}

function stopPainting(){
  painting = false;
  
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;}

function onMouseDown(event){
  painting = true;
}

function onMouseUp(event){
  stopPainting();
  
}

function handRangeChange(event){
  const size = event.target.value;
  ctx.lineWidth=size;
}

function handleModeClick(){
  if(filling === true){
    filling = false;
    mode.innerText = "Fill";
  }
  else{
    filling = true;
    mode.innerText = "Paint";
  }
}

// canvas : context를 갖는 html요소.
// context는 요소 안에서 픽셀에 접근할 수 있는 방법.
// canvas에는 2d뿐만 아니라 많은 context가 있음.

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
  );

if(range){
  range.addEventListener("input", handRangeChange);
}

if(mode){
  mode.addEventListener("click", handleModeClick);
}