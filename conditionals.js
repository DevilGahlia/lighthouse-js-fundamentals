const raining = true;
const temperature = -5;

if (raining) {
	console.log("Don't forget your umbrella!");
} else {
	console.log("It's nice and sunny out");
}

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
	console.log("Short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");