/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let numbers = [];
    
    let inorder = function(root){
        if (root.left) inorder(root.left);
        numbers.push(root.val);
        if (root.right) inorder(root.right);
        return;
    }
    inorder(root);
    return numbers;
};