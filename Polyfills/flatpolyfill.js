// flat() polyfill

Array.prototype.myFlat = function () {
	const stack = [...this];

	const result = [];
	while (stack.length) {
		const popedElement = stack.pop();
		if (Array.isArray(popedElement)) {
			stack.push(...popedElement);
		} else {
			result.push(popedElement);
		}
	}
	return result.reverse();
};

//Example
const arr = [2, 3, 4, [1, 5, 6, [9, 4, 5]]];

console.log(arr.myFlat());
