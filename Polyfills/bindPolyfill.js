// bind() polyfill

Function.prototype.myBind = function (context = {}, ...args) {
	if (typeof this !== "function") {
		throw new Error(this + "cannot be bound as it is not callable");
	}

	context.fn = this;
	return function (...newArgs) {
		return context.fn(...args, ...newArgs);
	};
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

const newFunc = purchaseCar.myBind(car1, "₹");

console.log(newFunc(500000));
