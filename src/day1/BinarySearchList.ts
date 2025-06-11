// Binary Search List
// This function performs a binary search on a sorted list of numbers.
// It returns true if the needle is found in the haystack, otherwise false.
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
        } else if (value < needle) { // value is less than needle, so search in the right half
            low = mid + 1;
        } else {  // value is greater than needle, so search in the left half
            high = mid;
        }
    } while (low < high);

    return false;

}
