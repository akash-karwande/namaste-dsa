## Module 1: Loops

This module demonstrates few important loops in JavaScript:

1. **For Loop**: Executes a block of code a specific number of times.
   - Example: Logs the iteration number 5 times.
2. **While Loop**: Executes a block of code as long as the condition is true.
   - Example: Logs the iteration number while the condition `j < 5` is true.
3. **Do-While Loop**: Executes a block of code at least once, then continues as long as the condition is true.
   - Example: Logs the iteration number at least once, and continues while the condition `k < 5` is true.

You can find the implementation in [loops.js](loops.js).

## Example.js Documentation

This file contains utility functions for performing various operations on arrays.

### 1. `searchElement(array, element)`
Searches for an element in an array and returns its index or `-1` if not found.

**Parameters:**
- `array` (Array): The array to search in.
- `element` (any): The element to search for.

**Returns:**
- `number`: The index of the element if found, otherwise `-1`.

**Example:**
```javascript
searchElement([1, 2, 3, 4], 3); // Returns: 2
searchElement([1, 2, 3, 4], 5); // Returns: -1
```


2. countNegativeNumbers(array)
Counts the number of negative numbers in an array.

Parameters:

array (Array): The array to count negative numbers in.
Returns:

number: The count of negative numbers.
Example:
countNegativeNumbers([-1, 2, -3, 4]); // Returns: 2
countNegativeNumbers([1, 2, 3, 4]);  // Returns: 0
```


3. findLargestNumber(array)
Finds the largest number in an array.

Parameters:

array (Array): The array to find the largest number in.
Returns:

number: The largest number, or null if the array is empty.
Example:
findLargestNumber([1, 2, 3, 4]); // Returns: 4
findLargestNumber([]);           // Returns: null
```

4. findSmallestNumber(array)
Finds the smallest number in an array.

Parameters:

array (Array): The array to find the smallest number in.
Returns:

number: The smallest number, or null if the array is empty.
Example:

findSmallestNumber([1, 2, 3, 4]); // Returns: 1
findSmallestNumber([]);           // Returns: null


5. findSecondLargestNumber(array)
Finds the second largest number in an array.

Parameters:

array (Array): The array to find the second largest number in.
Returns:

number: The second largest number, or null if the array has fewer than 2 elements.
Example:
findSecondLargestNumber([1, 2, 3, 4]); // Returns: 3
findSecondLargestNumber([4]);         // Returns: null

File Path
The file is located at:

You can find the implementation in [example.js](example.js).