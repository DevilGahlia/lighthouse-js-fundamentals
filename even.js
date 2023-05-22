const isEven = function (num) {
	return num % 2 === 0;
} 

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
const thirtyIsEven = isEven(30);
const elevenhundredandoneIsEven = isEven(1101);

console.log(tenIsEven);
console.log(elevenIsEven);
console.log(thirtyIsEven);
console.log(elevenhundredandoneIsEven);

console.log(isEven(10));
console.log(isEven(11));