// find() polyfill

Array.prototype.myFind = function (callback) {
	if (typeof callback !== "function") {
		throw new Error("callback should be a function");
	}

	const arr = this;

	for (let i = 0; i < arr.length; i++) {
		const result = callback(arr[i], i, arr);
		if (result) {
			return arr[i];
		}
	}
	return undefined;
};

//Example

const array = [
	{
		name: "person1",
		age: "25",
	},
	{
		name: "person2",
		age: "20",
	},
];

const myResult = array.myFind((item) => item.age === "25");
console.log(myResult);
