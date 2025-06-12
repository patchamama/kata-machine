// Binary Search List
// This function performs a binary search on a sorted list of numbers.
// It returns true if the needle is found in the haystack, otherwise false.
// Definition: A binary search is an efficient algorithm for finding a target value within a sorted array or list. It works by repeatedly dividing the search interval in half, eliminating half of the elements from consideration at each step.
// The algorithm starts with the entire array and checks the middle element. If the middle element is equal to the target value, the search is successful. If the target value is less than the middle element, the search continues in the left half of the array; if it is greater, the search continues in the right half. This process repeats until the target value is found or the search interval is empty.
// O(log n) time complexity, O(1) space complexity.
// Usage: npx jest BinarySearchList

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        // const mid = Math.floor((low + high) / 2);
        const mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value < needle) {
            // value is less than needle, so search in the right half
            low = mid + 1;
        } else {
            // value is greater than needle, so search in the left half
            high = mid;
        }
    } while (low < high);

    return false;
}
