// BinaryTree Breadth First Search (BFS)
// Description: Searches for a value in a binary tree using the breadth-first search algorithm.
// Complexity: O(h), where h is the height of the tree.
// Test usage: npx jest BT

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value == needle) {
            return true;
        }
            
        q.push(curr.left)
        q.push(curr.right)
    }

    return false; 

}