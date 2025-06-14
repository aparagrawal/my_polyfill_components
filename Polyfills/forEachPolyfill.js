// forEach() polyfill

Array.prototype.myForEach = function (cb) {
	if (!cb) {
		throw new Error("Umable to find this function");
	}

	const arr = this;

	for (let i = 0; i < this.length; i++) {
		cb(this[i], i, this);
	}
};

//Example

let array = [2, 5, 7, 87, 8.7];

const myResult = array.myForEach((item, index) => {
	console.log(item);
});
