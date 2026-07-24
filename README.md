# JavaScript Concepts & Asynchronous Programming

This repository contains various examples of core JavaScript concepts, array manipulation, and asynchronous programming patterns. Below is a breakdown of the concepts covered in each specific file.

---

### `ex1.js`
This file demonstrates the differences in variable declarations (`var`, `let`, `const`) and provides an example of an arrow function[cite: 1].

---

### `ex2.js`
This file covers standard array operations: finding even numbers with `filter()`, squaring them with `map()`, and summing the results with `reduce()`[cite: 2].

---

### `ex3.html`
This HTML document acts as the entry point to run the promise-based script by linking to `ex3_promise.js` within the head tag[cite: 3].

---

### `ex3_sync.js`
This file demonstrates synchronous programming where code is executed sequentially, blocking the thread using a custom `waitForInput` delay loop[cite: 7].

---

### `ex3_async.js`
This file demonstrates unordered asynchronous execution using `setTimeout()`, which allows tasks to run without blocking the main thread, though they complete based on their specific timer lengths[cite: 4].

---

### `ex3_callback.js`
To enforce a strict sequential order in asynchronous tasks, this file implements nested callback functions (often known as "callback hell")[cite: 5].

---

### `ex3_promise.js`
This file resolves the deeply nested callback structure by using Promises, demonstrating both the `.then()` chain approach and the modern `async`/`await` implementation inside a `try/catch` block[cite: 6].

---

### `ex4_1.js`
This file shows how to perform array destructuring by index and object destructuring by keys[cite: 8].

---

### `ex4_2.js`
This file demonstrates how the spread operator (`...`) can be utilized to combine multiple arrays into a single array[cite: 9].

---

### `ex4_3.js`
This file highlights two concepts: utilizing rest parameters (`...nums`) to gather function arguments into an array, and using the spread operator to extend an existing object (`...student`) with new nested properties[cite: 10].