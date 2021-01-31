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

    searchKey(key){
        return this.searchNode(this.root,key)
    }

    searchNode(node,key){
        if (node){
            if (key<node.key){
                return this.searchNode(node.left,key)
            }else if (key>node.key){
                return this.searchNode(node.right,key)
            } else {
                return true;
            }
        } else {
            return false
        }
    }

    updateKey(key,key2){
        return this.updateNode(this.root,key)
    }

    updateNode(node,key,key2){
        if (node){
            if (key<node.key){
                return this.updateKey(node.left,key,key2)
            }else if (key>node.key){
                return this.updateKey(node.right,key,key2)
            } else {
                node.key=key2
                return true;
            }
        } else {
            return false
        }
    }

    removeKey(key){
        this.root=this.removeNode(this.root,key);
    }

    removeNode(node,key){
        if (node){
            if (key<node.key){
                node.left=this.removeNode(node.left,key)
                return node
            } else if (key>node.key){
                node.right=this.removeNode(node.right,key)
                return node
            } else{

                if (node.left&&node.right){
                    let targetKey=this.minNode(node.right)
                    node.key=targetKey;
                    node.right=this.removeNode(node.right,key);
                    return node
                }
                if (node.left || node.right){
                    if (node.left){
                        node=node.left;
                    }

                    if (node.right){
                        node=node.right;
                    }
                    return node
                }
                node = null;
                return node
            }
        } else {
            return null;
        }
    }

}

let treeData=new BinarySearchTree();
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
