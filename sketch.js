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

	strokeWeight(1);
	stroke(255,0,0);
	line(racamanSeries[racamanSeries.length-1],
		height/2-20, racamanSeries[racamanSeries.length-1],
		height/2);
}
