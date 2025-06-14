// call() polyfill

Function.prototype.myCall = function (context = {}, ...args) {
	if (typeof this !== "function") {
		throw new Error("This function is not callable");
	}

	context.fn = this;
	context.fn(...args);
};

//Example

let car1 = {
	color: "red",
	company: "ferrari",
};

function purchaseCar(currency, amount) {
	console.log(
		`I bought a new ${this.company} of color ${this.color} of amount ${amount} in ${currency} currency.`,
	);
}

purchaseCar.myCall(car1, "₹", 500000);
