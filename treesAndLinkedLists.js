// setup linked list

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode(1);
var b = new LinkedListNode(2);
var c = new LinkedListNode(3);
var d = new LinkedListNode(4);

a.next = b;
b.next = c;
c.next = d;

/////////////

// iterate through LL

function iterateList(rootNode){
  
  var current = rootNode
  while(current){
    console.log(current.value)
    current = current.next
  }
}

// iterateList(a)

///////////

// reverse a LL

function reverseLinkedList(rootNode){
  var current = rootNode.next
  var last = rootNode
  rootNode.next = null
  
  while(current){
    var temp = current.next
    current.next = last
    last = current
    current = temp
  }
  return last
}

// reverseLinkedList(a)

////////////

// delete a node in a LL

function deleteNode(nodeToDelete){
  var nextNode = nodeToDelete.next;

	nodeToDelete.value = nextNode.value;
  nodeToDelete.next  = nextNode.next;
}

///////////

// is a LL a cycle

function cycle(node){
  var slow = node
  var fast = node.next
  
  while (fast.next.next && slow.next){
    if (fast === slow){
      return true
    } else {
      fast = fast.next.next
      slow = slow.next
    }
  }
  return false
}

//////////////

// find the kth node in a LL

function findKth(node, k){
  var tail = node
  var current = node
  
  for (var counter = 0; counter < k; counter++){
    current = current.next
  }
  
  while (current) {
    current = current.next
    tail = tail.next
  }
  
  return tail
}

///////////////

// setup binary tree

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
};

var node = new BinaryTreeNode(30)
node.insertLeft(10)
node.left.insertLeft(0)
node.left.insertRight(20)
node.insertRight(50)
node.right.insertLeft(40)
node.right.insertRight(60)

//////

// depth first search
function iterateThroughTreeDFS(rootNode){
  var nodeStack = [rootNode]
  
  while(nodeStack.length){
    var poppedNode = nodeStack.pop()
    console.log(poppedNode.value)
    if (poppedNode.right) nodeStack.push(poppedNode.right)
    if (poppedNode.left) nodeStack.push(poppedNode.left)
  }
}

// iterateThroughTreeDFS(node)

// breadth first search
function iterateThroughTreeBFS(rootNode){
  var nodeQueue = [node]
  
  while(nodeQueue.length){
    var shiftedNode = nodeQueue.shift()
    console.log(shiftedNode.value)
    if (shiftedNode.left) nodeQueue.push(shiftedNode.left)
    if (shiftedNode.right) nodeQueue.push(shiftedNode.right)
  }
}

////////////////

// Given a binary tree, determine if it is height-balanced. For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function isBalanced(treeRoot) {

  var depths = []
  
  var stack = [[treeRoot, 0]]

  while(stack.length) {
    var popped = stack.pop()
    var node = popped[0]
    var depth = popped[1]
    
    if (!node.left && !node.right) {

      if (!depths.includes(depth)) {
        depths.push(depth)
        
        if ((depths.length > 2) ||
              (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      if (node.left) {
        stack.push([node.left, depth + 1])
      }
      if (node.right) {
        stack.push([node.right, depth + 1])
      }
    }
  }

  return true;
}

///////////////////////////

// determine if the tree is a valid binary tree

function isBinarySearchTree(treeRoot) {

  var nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

  while (nodeAndBoundsStack.length) {
      var nodeAndBounds = nodeAndBoundsStack.pop()
      var node = nodeAndBounds.node
      var lowerBound = nodeAndBounds.lowerBound
    	var upperBound = nodeAndBounds.upperBound

      if (node.value <= lowerBound || node.value >= upperBound) {
          return false;
      }

      if (node.left) {
          nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

      }
      if (node.right) {
          nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
      }
  }

  return true;
}

///////////////////////////


// find the second largest node in a tree

function findSecondLargest(rootNode) {

  var current = rootNode;

  while (current) {

    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}

function findLargest(rootNode) {
  var current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

/////////////////

// recursive Binary Search of Tree

function binarySearchThroughTree(node, target){
  if (node){
    if (node.value === target){
      return true
    } else if (node.value > target){
      return binarySearchThroughTree(node.left, target)
    } else if (node.value < target){
      return binarySearchThroughTree(node.right, target)
    }
  }
  return false
}

//////////////////////////////

// given a sorted array of values, create a binary tree

function createMinimalHeightBST(arr, start, end) {
  if (start > end) return null;

  const middleIndex = Math.ceil((start + end) / 2),
        rootNode = new TreeNode(arr[middleIndex]);
        console.log(rootNode.value)

  rootNode.left = createMinimalHeightBST(arr, start, middleIndex - 1);
  rootNode.right = createMinimalHeightBST(arr, middleIndex + 1, end);

  return rootNode;
}

const arr = [1, 2, 3, 4, 5]

createMinimalHeightBST(arr, 0, arr.length - 1)

function TreeNode(value) {
    this.value = value;
    this.left = null
    this.right = null;
}