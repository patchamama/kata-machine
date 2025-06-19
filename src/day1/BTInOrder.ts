// Description: 
// Test usage: npx jest BTInOrder
// npx jest Order

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path;
    // recurse
    // Pre-order: visit the node first, then left and right children
    
    // recurse 
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    // post-order: visit the node after left and right children

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}