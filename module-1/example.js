// 1. Search element in an array
// This function searches for an element in an array and returns its index or -1 if not found

function searchElement(array, element) {
  for (let i = 0; i < array.length; i++) { // Loop through each element in the array
    if (array[i] === element) { // Check if the current element matches the search element
      return i; // Return the index if the element is found
    }
  }
  return -1; // Return -1 if the element is not found
}

// 2. Negative number count in an array
// This function counts the number of negative numbers in an array  

function countNegativeNumbers(array) {
  let count = 0; // Initialize a counter for negative numbers
  for (let i = 0; i < array.length; i++) { // Loop through each element in the array
    if (array[i] < 0) { // Check if the current element is negative
      count++; // Increment the counter if a negative number is found
    }
  }
  return count; // Return the total count of negative numbers
}


// 3. Largest number in an array
// This function finds the largest number in an array


function findLargestNumber(array) {
  let largest = array[0]; // Assume the first element is the largest or -infinity
  if (array.length === 0) return null; // Return null if the array is empty
  for (let i = 1; i < array.length; i++) { // Start from the second element
    if (array[i] > largest) { // Check if the current element is larger than the current largest
      largest = array[i]; // Update largest if a larger number is found
    }
  }
  return largest; // Return the largest number found in the array
}


// 4. Smallest number in an array
function findSmallestNumber(array) {
  let smallest = array[0]; // Assume the first element is the smallest or +infinity
  if (array.length === 0) return null; // Return null if the array is empty
  for (let i = 1; i < array.length; i++) { // Start from the second element
    if (array[i] < smallest) { // Check if the current element is smaller than the current smallest
      smallest = array[i]; // Update smallest if a smaller number is found
    }
  }
  return smallest; // Return the smallest number found in the array
}

// 5. second largest number in an array
function findSecondLargestNumber(array) {
  if (array.length < 2) return null; // Return null if the array has less than 2 elements
  let largest = -Infinity; // Initialize largest to negative infinity
  let secondLargest = -Infinity; // Initialize second largest to negative infinity
  for (let i = 0; i < array.length; i++) { // Loop through each element in the array
    if (array[i] > largest) { // If current element is larger than largest
      secondLargest = largest; // Update second largest to previous largest
      largest = array[i]; // Update largest to current element
    } else if (array[i] > secondLargest && array[i] !== largest) { // If current element is not equal to largest and is larger than second largest
      secondLargest = array[i]; // Update second largest to current element
    }
  }
  return secondLargest === -Infinity ? null : secondLargest; // Return second largest or null if not found
}