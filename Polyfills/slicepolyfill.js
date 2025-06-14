// slice polyfill

String.prototype.mySlice = function (start = 0, end = this.length) {
	const str = this.toString(); // make sure it's a primitive string
	const len = str.length;

	let from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	let to = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

	let result = "";
	for (let i = from; i < to; i++) {
		result += str[i];
	}

	return result;
};
//Example
const word = "JavaScript";

console.log(word.mySlice(0, 4));
console.log(word.mySlice(-6, -3));
