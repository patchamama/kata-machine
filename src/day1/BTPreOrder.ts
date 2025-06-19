// Description: 
// Test usage: npx jest BTPreOrder
// npx jest Order

function walk(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) return;
    // recurse
    // Pre-order: visit the node first, then left and right children
    path.push(curr.value);
    // recurse 
    walk(curr.left, path);
    walk(curr.right, path);
    // post-order: visit the node after left and right children

}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);

    return path;
}