//reduce() polyfill

Array.prototype.myReduce = function (cb, initialValue) {
	let accumulator = initialValue;

	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; // if initial value is not given zero it will take the first element as the initial value
	}
	return accumulator;
};

const arr = [2, 3, 4, 5];

const myResult = arr.reduce((acuu, curr) => {
	return acuu + curr;
}, 0);

console.log(myResult);
