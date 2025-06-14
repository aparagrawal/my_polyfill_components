// apply() polyfill

Function.prototype.myApply = function (context = window, args = []) {
	if (typeof this !== "function") {
		throw new TypeError("This function is not callable");
	}

	if (!Array.isArray(args)) {
		throw new TypeError(
			"The second argument of myApply() must be an array. Received: " +
				(args === null
					? "null"
					: args === undefined
					? "undefined"
					: typeof args === "object"
					? "object"
					: typeof args),
		);
	}

	// Create a unique property name to avoid conflicts
	const uniqueProp = Symbol("fn");

	// Set the context to window if null or undefined
	context = context || window;

	// Add the function to the context
	context[uniqueProp] = this;

	// Call the function with the provided arguments
	const result = context[uniqueProp](...args);

	// Clean up by deleting the temporary property
	delete context[uniqueProp];

	// Return the result
	return result;
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
	return `${this.company} ${this.color}`; // Added return value for testing
}

// Test cases
console.log(purchaseCar.myApply(car1, ["₹", 500000])); // Should work
console.log(purchaseCar.myApply(null, ["₹", 500000])); // Should work with null context
console.log(purchaseCar.myApply(undefined, ["₹", 500000])); // Should work with undefined context
