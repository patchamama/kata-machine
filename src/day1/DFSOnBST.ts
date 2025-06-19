// Given a binary search tree (BST) and a needle, implement a depth-first search (DFS) algorithm to find the needle in the BST.
// BinaryTree Depth First Search (DFS)
// Description: Searches for a value in a binary search tree using the depth-first search algorithm.
// Complexity: O(h), where h is the height of the tree.
// Test usage: npx jest BST

function search(curr: BinaryNode<number> | null, needle: number): boolean {
    // base case more simple
    // if the current node is null, return false
    // this means we have reached a leaf node without finding the needle
    // or the tree is empty
    if (!curr) return false;
    
    // search, if the current node's value matches the needle, return true
    // this means we have found the needle in the tree
    // this is the base case for the recursion
    if (curr.value === needle) {
        return true;
    }
    
    // recurse traverse the left and right subtrees
    // if either subtree contains the needle, return true
    // this is the recursive case for the function
    // we will continue searching until we either find the needle or exhaust the tree 
    if (curr.value < needle) {
        return search(curr.right, needle);
    }
    // if (curr.value >= needle) {
    return search(curr.left, needle);

}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    // start the search from the head of the tree
    // return the result of the search function
    return search(head, needle);
}