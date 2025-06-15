// Quick Sort Algorithm Implementation in TypeScript
// Defintion: Quick sort is a divide-and-conquer algorithm that sorts an array by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
// Note: This implementation sorts the array in place and does not return a new array. The input array is modified directly.
// Complexity: O(n log n) on average, O(n^2) in the worst case (when the pivot is always the smallest or largest element), O(log n) space complexity for the recursive stack.
// Example usage in a test file:
// npx jest Quick

export default function quick_sort(arr: number[]): void {
    function quickSortRecursive(low: number, high: number): void {
        if (low >= high) {
            return;
        }

        const pivotIndex = partition(low, high);
        // Recursively sort elements before and after partition
        quickSortRecursive(low, pivotIndex - 1);
        quickSortRecursive(pivotIndex + 1, high);
    }

    function partition(low: number, high: number): number {
        const pivot = arr[low];
        let i = low + 1;
        let j = high;

        // Move the pivot to the end
        while (true) {
            // Find the first element greater than the pivot
            while (i <= j && arr[i] < pivot) i++;
            // Find the first element less than or equal to the pivot
            while (i <= j && arr[j] > pivot) j--;
            // Swap elements if they are out of order
            if (i >= j) break;

            // [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; // swap
        }
        // Place the pivot element at the correct position
        // [arr[low], arr[j]] = [arr[j], arr[low]]; // final swap
        const temp = arr[low];
        arr[low] = arr[j];
        arr[j] = temp; // final swap
        // Return the index of the pivot element
        return j;
    }

    quickSortRecursive(0, arr.length - 1);
}

// Quick Sort Algorithm Implementation in TypeScript
export  function quick_sort2(arr: number[]): void {
    function quickSortRecursive(low: number, high: number): void {
        if (low >= high) {
            return;
        }

        const pivotIndex = partition(low, high);
        // Recursively sort elements before and after partition
        quickSortRecursive(low, pivotIndex - 1);
        quickSortRecursive(pivotIndex + 1, high);
    }

    function partition(low: number, high: number): number {
        const pivot = arr[high];
        let idx = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                idx++;
                // [arr[idx], arr[j]] = [arr[j], arr[idx]]; // swap
                const temp = arr[idx];
                arr[idx] = arr[j];
                arr[j] = temp; // swap
            }
        }

        // Place the pivot element at the correct position
        // [arr[idx + 1], arr[high]] = [arr[high], arr[idx + 1]]; // final swap
        idx++;
        const temp = arr[idx];
        arr[idx] = arr[high];
        arr[high] = temp; // final swap
        // Return the index of the pivot element
        return idx;
    }

    quickSortRecursive(0, arr.length - 1);
}
