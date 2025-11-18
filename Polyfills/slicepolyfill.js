// slice polyfill with string

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

// slice() polyfill with array

Array.prototype.mySlicewithArray = function (start = 0, end = this.length) {
	const result = [];
	const len = this.length;

	let from = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
	let to = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

	for (let i = from; i < to; i++) {
		result.push(this[i]);
	}

	return result;
};

console.log([10, 20, 30, 40].mySlicewithArray(1, 3));
