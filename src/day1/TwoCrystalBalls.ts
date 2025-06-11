// Two Crystal Balls Problem
// Given an array of boolean values representing whether a crystal ball breaks when dropped from a certain height, find the index of the first ball that breaks using two balls and minimizing the number of drops.
// This implementation uses a step search followed by a linear search to find the first breaking ball.
// O(sqrt(n)) time complexity, O(1) space complexity.
// Usage: npx jest TwoCrystalBalls

// Two Crystal Balls Problem
// This function finds the first index of a crystal ball that breaks when dropped.
// It uses a step search followed by a linear search to minimize the number of drops.

export default function two_crystal_balls(breaks: boolean[]): number {

    const n = breaks.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Solution 1: Using a step search followed by a linear search
    let i = step;
    for (; i < n; i += step) {
        if (breaks[i]) {
            break;
        }
    }

    i -= step; // Step back to the last known good position
    // Linear search in the last segment
    for (let j = i; j < Math.min(i + step, n); ++j) {
        if (breaks[j]) {
            return j; // Found the first ball that breaks
        }
    }
    return -1; // No ball broke

    // Uncomment the following block to use the second solution
    if (false) { // Solution 2 ChatGPT
        // Find the first ball that breaks
        while (prev < n && !breaks[prev]) {
            prev += step;
        }

        // If we went out of bounds, we need to check the last segment
        if (prev >= n) {
            prev = n - 1;
        } else {
            // We found a breaking point, so we need to backtrack
            prev -= step;
        }

        // Linear search in the last segment
        for (let i = prev; i < Math.min(prev + step, n); ++i) {
            if (breaks[i]) {
                return i;
            }
        }

        return -1; // No ball broke
    }

}