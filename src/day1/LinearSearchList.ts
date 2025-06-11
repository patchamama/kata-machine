// Linear Search List
// O(n) time complexity, O(1) space complexity.

export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

// npx jest LinearSearchList