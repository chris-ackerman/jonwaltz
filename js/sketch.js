function setup() {
	var canvas = createCanvas(2000, 2000);
	canvas.parent('sketch-holder')
}

function draw() {
	clear();
	ellipse(15,15,20,20);
	line(15,15,mouseX,mouseY);
	stroke(47, 52, 144);
	strokeWeight(4);
	strokeCap(ROUND);
}