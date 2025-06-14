// promise polyfill

function myPromise(executor) {
	let onResolve,
		onReject,
		isFulfilled = false,
		isCalled = false,
		isRejected = false,
		value;

	function resolve(val) {
		isFulfilled = true;
		value = val;

		if (typeof onResolve === "function") {
			isCalled = true;
			onResolve(val);
		}
	}

	function reject(val) {
		isRejected = true;
		value = val;
		if (typeof onReject === "function") {
			isCalled = true;
			onReject(val);
		}
	}

	this.then = function (callback) {
		onResolve = callback;

		if (isFulfilled && !isCalled) {
			isCalled = true;
			onResolve(value);
		}
		return this;
	};
	this.catch = function (callback) {
		onReject = callback;

		if (isRejected && !isCalled) {
			isCalled = true;
			onReject(value);
		}
		return this;
	};

	try {
		executor(resolve, reject);
	} catch (err) {
		reject(err);
	}
}

const examplePromise = new myPromise((resolve, reject) => {
	setTimeout(() => {
		resolve(2);
	}, 2000);
});

examplePromise
	.then((res) => {
		console.log("Success:", res);
	})
	.catch((err) => {
		console.error("Error:", err);
	});

// Another example with resolve
// const successPromise = new myPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2);
// 	}, 1000);
// });

// successPromise
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});
