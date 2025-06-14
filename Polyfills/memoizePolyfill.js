//memoize() polyfill

function myMemoize(fn, context) {
	const res = {};

	return function (...args) {
		const argsIncache = JSON.stringify(args);
		if (!res[argsIncache]) {
			res[argsIncache] = fn.call(context || this, ...args);
		}
		return res[argsIncache];
	};
}

//Example

const findMysqaure = (num1, num2) => {
	for (let i = 0; i <= 1000000; i++) {}
	return num1 * num2;
};
const myResult = myMemoize(findMysqaure);

console.time("first call");
console.log(myResult(2222, 3333));
console.timeEnd("first call");

console.time("second call");
console.log(myResult(2222, 3333));
console.timeEnd("second call");
