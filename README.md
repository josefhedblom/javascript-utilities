# JavaScript Utilities

A library of utilities for String, Array, Number and Date classes.

```javascript
version: 1.0.0
```

How to install:

```javascript
npm install @jhedblom/javascript-utilities --save
```

How to use:

```javascript
require("@jhedblom/javascript-utilities");
```

Run test:

```javascript
npm test
```

## String methods

```javascript
// Capitalize the first letter of one word.
String.capitalizeFirstLetter();

// Capitalize the first letter of each word.
String.titleize();

// Checks if string is empty.
String.isEmpty();

// Finds string and extracts it.
String.extractWord(str);

// Print to console.
String.print(num);
```

## Array methods

```javascript
// Multiply each element
Array.times(num);

// Sums the total value
Array.sum();

// Finds element and removes it
Array.removeItem(element);

// Returns the last element
Array.last();

// Return the smallet element
Array.min();

// Return the biggest element
Array.max();

// Return a shuffle copy
Array.shuffle();

// Sorts elements alphabeticall
Array.sortAlphabeticall();

// Print to console.
Array.print(num);
```

## Number methods

```javascript
// Check if number is even
Number.isEven();

// Check if number is odd
Number.isOdd();
```

## Date methods

```javascript
// Returns the current date (year-month-day)
Date.getCurrentDate();

// Returns the current weekday
Date.getCurrentWeekday();

// Returns the current month
Date.getCurrentMonth();

// Returns the weekday from date input
Date.whatWeekday();

// Returns the month from date input
Date.whatMonth();
```
