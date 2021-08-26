var something;
function setup() 
{
  createCanvas(400, 400);
  something = new Box(175,175,50,50);
}

function draw() 
{
  background(220);

  something.show();
  something.movey(-3);
}

