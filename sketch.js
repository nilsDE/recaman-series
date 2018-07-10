let currentNumber = 0;
let racamanSeries = [0];
function setup() {
//  frameRate(10);
  createCanvas(1200, 600);
	background(99);
}

function draw() {
	let nextNumber = currentNumber+1;
	let lastElement = racamanSeries[racamanSeries.length - 1];
	let potential = lastElement - nextNumber;
	if (potential < 0 || racamanSeries.includes(potential)) {
		let newRacamanNumber = lastElement + nextNumber;
		racamanSeries.push(newRacamanNumber);
	} else {
		racamanSeries.push(potential);
	}
	currentNumber++;

	stroke(255);
	strokeWeight(3);
	line(0, height/2, width, height/2);

  angleMode(DEGREES);
  let circleStartPoint = racamanSeries[racamanSeries.length - 2];
  let diameter = 0;
  let radius = 0;
  let startX = 0;
  let startY = 0;
  if (racamanSeries[racamanSeries.length - 1] > racamanSeries[racamanSeries.length - 2]) {
    diameter = racamanSeries[racamanSeries.length - 1] - racamanSeries[racamanSeries.length - 2];
    radius = diameter/2;
    startX = circleStartPoint + radius;
    startY = height/2;
  } else {
    diameter = racamanSeries[racamanSeries.length - 2] - racamanSeries[racamanSeries.length - 1];
    radius = diameter/2;
    startX = circleStartPoint - radius;
    startY = height /2;
  }

  strokeWeight(1);
  let currentAngle = 180;
  let x = circleStartPoint;
  let y = height/2;
  for (let i = 0; i < 180; i+= 0.2) {
    point(x,y);
    currentAngle++;
    x = startX + radius * sin(currentAngle);
    y = startY + radius * cos(currentAngle);
  }
}
