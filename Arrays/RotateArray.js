// rotate array to the right by one index

const arr = [1, 2, 3, 4, 5];
const result = (arr) => {
	const copy = arr[arr.length - 1];

	for (let i = arr.length - 1; i > 0; i--) {
		arr[i] = arr[i - 1];
	}

	arr[0] = copy;

	console.log(arr);
};

result(arr);

//rotate array to the left by k elements
const arr1 = [1, 2, 3, 4, 5];
const k = 2;

const result1 = (arr, k) => {
	for (let j = 0; j < k; j++) {
		const copy = arr[0];

		for (let i = 0; i < arr.length - 1; i++) {
			arr[i] = arr[i + 1];
		}

		arr[arr.length - 1] = copy;
	}

	console.log(arr);
};

result1(arr1, 2);

// rotate by k element efficient algorithm

const arr2 = [1, 2, 3, 4, 5];
let k2 = 2;
const temp = new Array(arr2.lenght);

k2 = k2 % arr2.length;

const result2 = (arr, k) => {
	for (let i = 0; i < arr.length; i++) {
		temp[i] = arr[(i + k) % arr.length];
	}

	console.log(temp);
};

result2(arr2, k2);
