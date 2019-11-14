#set up white background
function setup()
{
	createCanvas(800, 600);
    background('white');

}

# will use this variable to change color value for painting
var value;
# will use this variable to change size of paint brush
var size = 0;

# this function will change the color and size of brush depending on user keybaord input
# want to add more colors, just add them to this function with a corresponding key
# can also create a mapping data structure to store values and keys when you got many colors
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
# white can be used as an eraser feature
	} else if (key=== 'w') {
        value = 'white';
	}
	} else if (key=== '+') {
		size = size + 1;
	}
	} else if (key=== '-') {
		size = size - 1 ;
	}
    return false;
}

# this function will create a small circle whenever you click/drag the mouse, making it into a brush to paint!
function mouseDragged()
{
	# tells program what color to make the circle
    fill(value);
	# no outline
    noStroke();
	# creates circle figure
    ellipse(mouseX,mouseY,11+size,11+size);
}

# starts program and waits for user input
# all figures draw will remain on canvas since no code is inside draw function
# to erase figures, switch color to white and paint over things you want to erase
function draw()
{

}




