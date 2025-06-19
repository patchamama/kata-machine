// CompareBinaryTrees.ts
// Description: Compares two binary trees for structural and value equality.
// Complexity: O(n), where n is the number of nodes in the trees.
// Use: npx jest CompareBinaryTrees


export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    // structure check
    if (a === null && b === null) {
        return true;
    }

    // structure check
    if (a === null || b === null) {
        return false;
     }
    
    // value check
    if (a?.value !== b?.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}