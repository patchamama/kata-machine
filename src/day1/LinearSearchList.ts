// Linear Search List
// O(n) time complexity, O(1) space complexity.
// Definition: A linear search (or sequential search) is a simple algorithm that checks each element in a list or array sequentially until it finds the target value or reaches the end of the list. It is often used when the list is unsorted or when the size of the list is small.
// Usage: npx jest LinearSearchList


export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

