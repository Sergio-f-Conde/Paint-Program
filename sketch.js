function setup()
{
	createCanvas(800, 600);
    background('white');

}

var value

function keyTyped()
{
    if (key=== 'r') {
        value = 'red';
    } else if (key === 'b') {
        value = 'blue';
    } else if (key=== 'g') {
        value = 'green';
    } else if (key=== 'k') {
        value = 'black';
    }
    return false;
}

function mouseDragged()
{
    fill(value);
    noStroke();
    ellipse(mouseX,mouseY,11,11);
}

function draw()
{

}




