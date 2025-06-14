//once() polyfill

function once(func, context) {
	let ran;

	return function () {
		if (func) {
			ran = func.apply(context || this, arguments);
			func = null;
		}
		return ran;
	};
}

const hello = once(() => console.log("helloo"));

hello();
hello();
hello();
hello();
hello();
// hello is getting condoled only once
