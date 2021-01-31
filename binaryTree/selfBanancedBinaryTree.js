class Node {
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null;
    }

    insert(key){
        if (!this.root){
            this.root=new Node(key);
        } else {
            this.insertNode(this.root,key)
        }
    }

    insertNode(node,key){
        if (key<node.key){
            if (node.left){
                this.insert(node.left,key)
            } else {
                node.left=new Node(key)
            }
        } else {
            if (node.right){
                this.insert(node.right,key)
            } else {
                node.right=new Node(key)
            }
        }
    }

    min(){
        console.log(this.minNode(this.root))
        return this.minNode(this.root)
    }

    minNode(node){
        let current=node;
        while(current&&current.left){
            current = current.left;
        }

        return current;
    }

    max(){
        return this.maxNode(this.root)
    }
    maxNode(node){
        let current=node;
        while(current&&current.right){
            current = current.right;
        }

        return current;
    }

    //中序遍历
    inOrderTraverse(cb){
        this.inOrderTraverseNode(this.root,cb)
    }

    inOrderTraverseNode(node,cb){
        if (node){
            this.inOrderTraverseNode(node.left,cb)
            cb(node.key);
            this.inOrderTraverseNode(node.right,cb)
        }
    }

    //先序遍历
    preOrderTraverse(cb){
        this.preOrderTraverseNode(this.root,cb)
    }

    preOrderTraverseNode(node,cb){
        if (node){
            cb(node.key);
            this.preOrderTraverseNode(node.left,cb)
            this.preOrderTraverseNode(node.right,cb)
        }
    }

    //后续遍历
    backOrderTraverse(cb){
        this.backOrderTraverseNode(this.root,cb)
    }

    backOrderTraverseNode(node,cb){
        if (node){
            this.backOrderTraverseNode(node.left,cb)
            this.backOrderTraverseNode(node.right,cb)
            cb(node.key);
        }
    }


}

class AVLTree extends BinarySearchTree{
    constructor(){
        super()
    }

    getNodeHeight(node){
        if (node){
            Math.max(this.getNodeHeight(node.left),this.getNodeHeight(node.right))+1;
        }else {
            return -1;

        }
    }

    getBalanceFactor(node){
        const heightDifference=this.getNodeHeight(node.left)-this.getNodeHeight(node.right)

        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 0:
                return  BalanceFactor.BALANCED;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
        }
    }

    rotationLL(node){
        let temp=node.left;
        node.left=temp.right
        temp.right=node;
        return temp
    }

    rotationRR(node){
        const temp=node.right;
        node.right=temp.left;
        temp.left=node;
        return temp
    }

    rotationLR(node){
        node.left=this.rotationRR(node.left)
        return this.rotationLL(node)
    }

    rotationRL(node){
        node.right=this.rotationLL(node.right)
        return this.rotationRR(node)
    }

    insert(key) {
        this.root=this.insertNode(this.root,key)
    }

    insertNode(node,key){
        // if (!node){
        //     return new Node(key)
        // } else if (key<node.key){
        //     node.left=this.insertNode(node.left,key);
        //
        // } else if (key>node.key){
        //     node.right=this.insertNode(node.right,key)
        // } else {
        //     return node;
        // }
        if (!node){
            return null
        }
        super.insertNode(node,key);

        switch (this.getBalanceFactor(node)) {
            case BalanceFactor.UNBALANCED_LEFT:
                if (key<node.left.key){
                    node=this.rotationLL(node);
                }else {
                    node = this.rotationLR(node)
                }
                break;
            case BalanceFactor.UNBALANCED_RIGHT:
                if (key<node.right.key){
                    node=this.rotationRL(node);
                }else {
                    node = this.rotationRR(node)
                }
                break;
        }
        return node;
    }

    removeNode(node,key){
        if (!node){
            return null
        }
        super.insertNode(node,key);

        switch (this.getBalanceFactor(node)) {
            case BalanceFactor.UNBALANCED_LEFT:
                if (this.getBalanceFactor(node.left)===BalanceFactor.BALANCED
                    || this.getBalanceFactor(node.left)===BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                    node=this.rotationLL(node);
                }else {
                    node = this.rotationLR(node)
                }
                break;
            case BalanceFactor.UNBALANCED_RIGHT:
                if (this.getBalanceFactor(node.right)===BalanceFactor.BALANCED
                    || this.getBalanceFactor(node.right)===BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                    node=this.rotationRR(node);
                }else {
                    node = this.rotationRL(node)
                }
                break;
        }
        return node;
    }

}

const BalanceFactor={
    UNBALANCED_RIGHT:-2,
    SLIGHTLY_UNBALANCED_RIGHT:-1,
    BALANCED:0,
    SLIGHTLY_UNBALANCED_LEFT:1,
    UNBALANCED_LEFT:2,

}

let treeData=new AVLTree();
treeData.insert(11);
treeData.insert(2);
treeData.insert(31);
treeData.insert(41);
treeData.insert(4);
treeData.insert(3);
treeData.insert(5);
treeData.insert(6);
treeData.insert(7);
treeData.min();
