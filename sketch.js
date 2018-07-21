let currentNumber = 0;
let racamanSeries = [0];
function setup() {
//  frameRate(10);
  createCanvas(windowWidth, windowHeight);
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

	stroke(200);
	strokeWeight(1);
	line(0, height/2, width, height/2);

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

  noFill();
  strokeWeight(0.5);
  stroke(random(70, 220), 200);
  if (currentNumber % 2 == 0) {
    arc(startX, startY, diameter, diameter, 0, PI);
  } else {
    arc(startX, startY, diameter, diameter, PI, 0);
  }
}
