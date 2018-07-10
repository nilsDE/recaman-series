let currentNumber = 0;
let racamanSeries = [0];

function setup() {
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
  let angle = 0;
  let angleMovement = 0;
  let circleStartPoint = racamanSeries[racamanSeries.length - 2];
  let diameter = 0;
  if (racamanSeries[racamanSeries.length - 1] > racamanSeries[racamanSeries.length - 2]) {
    diameter = racamanSeries[racamanSeries.length - 1] - racamanSeries[racamanSeries.length - 2];
    angle = 180;
    angleMovement = 1;
  } else {
    diameter = racamanSeries[racamanSeries.length - 2] - racamanSeries[racamanSeries.length - 1];
    angle = -180;
    angleMovement = -1;
  }
/*
  for (i = 0; i = angle; i += angleMovement) {
    let x = circleStartPoint;
    let y = height/2;
  }
  */
}
