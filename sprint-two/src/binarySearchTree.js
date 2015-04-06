var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  if(this.value > value){
    if(!this.left){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if(this.value < value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    return 'This value is already in the binary tree';
  }
}

BinarySearchTree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  } else if(this.value < target){
    if(this.right){
      return this.right.contains(target);
    } else {
      return false;
    }
  } else if(this.value > target){
    if(this.left){
      return this.left.contains(target);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left) this.left.depthFirstLog(callback);
  if(this.right) this.right.depthFirstLog(callback);
}

BinarySearchTree.prototype.inOrder = function(){
  var result = [];

  var traverse = function(node){
    if(node.left) traverse(node.left);
    result.push(node.value);
    if(node.right) traverse(node.right);
  }

  traverse(this);

  return result;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
