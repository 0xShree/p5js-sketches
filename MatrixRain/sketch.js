var symbol;

function setup(){
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  symbol = new Mysymbol(
    width/2, 
    height/2
  );
  symbol.setToRandomSymbol();
}

//Draw
function draw(){
  symbol.render();
}

// Create Random Symbol
function Mysymbol(x, y){
  this.x = x;
  this.y = y;
  this.value;

  this.setToRandomSymbol = function(){
    this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
  }

  this.render = function(){
    fill(0, 255, 70);
    text(this.value, this.x, this.y);
  }
}