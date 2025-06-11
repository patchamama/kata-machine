// Bubble Sort Algorithm Implementation in TypeScript
// This code provides multiple solutions for the Bubble Sort algorithm.
// O(n^2) time complexity, O(1) space complexity.

export default function bubble_sort(arr: number[]): void {

    // Bubble Sort Algorithm, Solution 1.
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // Swap if the current element is greater than the next
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    if (false) { // Solution 2
        // Bubble Sort Algorithm, Solution 2.
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap if the current element is greater than the next
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    if (false) { // Solution 3 ChatGPT
        // Bubble Sort Algorithm, Solution 2.
        let n = arr.length;
        let swapped: boolean;

        // Outer loop for each pass
        do {
            swapped = false;
            // Inner loop for comparing adjacent elements
            for (let i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // Swap if the current element is greater than the next
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                }
            }
            // Reduce the range of the next pass since the last element is now sorted
            n--;
        } while (swapped);
    }

}