<<<<<<< Updated upstream
A lightweight JavaScript project demonstrating custom implementations (polyfills) of popular array methods like map, filter, and reduce and many more.

clone the repo
git clone https://github.com/your-username/my_polyfill_components.git
cd my_polyfill_components


run .js file
e.g.  node Polyfills/reducePolyfill.js

This project was created to deepen understanding of how core array methods work under the hood. It's a great learning tool for anyone looking to get better at JavaScript fundamentals and prototype inheritance.

=======
# JavaScript Polyfill Components

A collection of custom JavaScript polyfill implementations for commonly used array methods and function prototypes. This project provides educational and practical implementations of various JavaScript methods that can be used to understand how these methods work under the hood.

## 🚀 Features

- Custom implementations of essential JavaScript methods:
  - `Array.prototype.map()`
  - `Array.prototype.filter()`
  - `Array.prototype.reduce()`
  - `Function.prototype.call()`
  - `Function.prototype.apply()`

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my_polyfill_components.git

# Navigate to the project directory
cd my_polyfill_components

# Install dependencies
npm install
```

## 🛠️ Usage

Each polyfill is implemented as a standalone module in the `Polyfills` directory. You can import and use them in your JavaScript code:

```javascript
// Example usage of map polyfill
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.myMap((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## 📁 Project Structure

```
my_polyfill_components/
├── Polyfills/
│   ├── mapPolyfill.js
│   ├── filterPolyfill.js
│   ├── reducePolyfill.js
│   ├── callPolyfill.js
│   └── applyPolyfill.js
├── index.js
├── package.json
└── README.md
```

## 🧪 Available Polyfills

### Array Methods

- `myMap()`: Creates a new array with the results of calling a function for every array element
- `myFilter()`: Creates a new array with all elements that pass the test implemented by the provided function
- `myReduce()`: Reduces an array to a single value by executing a reducer function on each element

### Function Methods

- `myCall()`: Calls a function with a given `this` value and arguments provided individually
- `myApply()`: Calls a function with a given `this` value and arguments provided as an array

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/my_polyfill_components/issues).

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

[Your Name]

## 🙏 Acknowledgments

- Inspired by JavaScript's native method implementations
- Created for educational purposes to understand JavaScript's core functionality
>>>>>>> Stashed changes
