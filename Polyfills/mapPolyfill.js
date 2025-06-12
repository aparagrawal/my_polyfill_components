//map() Polyfill

Array.prototype.myMap = function (cb) {
	let temp = [];
	for (let i = 0; i < this.length; i++) {
		temp.push(cb(this[i], i, this));
	}
	return temp;
};

const arr = [2, 3, 4, 5, 6, 7, 8];

const myResult = arr.myMap((item, index) => {
	return item * 2;
});

console.log(myResult);
