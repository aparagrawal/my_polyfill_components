//filter() polyfill

Array.prototype.myFilter = function (cb) {
	let temp = [];

	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			temp.push(this[i]);
		}
	}
	return temp;
};

const arr = [1, 2, 4, 6, 7];

const myResult = arr.myFilter((item) => {
	return item > 2;
});

console.log(myResult);
