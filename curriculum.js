function twoSum(array, target){
  var saved = {}
  var results = []
  for(var i = 1; i < array.length; i++){
    if(saved[array[i]]){
      results[0] = saved[array[i]]
      results[1] = i
      return results
    } else {
      saved[target - array[i]] = i
    }
  }
}

twoSum([1, 2, 3, 4], 7)

/////////////////

function findMaxConsecutive(array){
  var maxConsecutive = array[0]
  var maxConsecutiveCount = 1
  var currentConsecutive = array[0]
  var currentConsecutiveCount = 1
  
  for(var i = 1; i < array.length; i++){
    if(array[i] === currentConsecutive){
      currentConsecutiveCount++
    } else {
      if(maxConsecutiveCount < currentConsecutiveCount){
        maxConsecutiveCount = currentConsecutiveCount
        maxConsecutive = currentConsecutive
      }
      currentConsecutive = array[i]
      currentConsecutiveCount = 1
    }
  }
  
  if(maxConsecutiveCount > currentConsecutiveCount){
    return maxConsecutive
  } else {
    return currentConsecutive
  }
}

// findMaxConsecutive([1, 2, 3, 3, 4, 4])

/////////////////

function maxProductOfTwo(array){
  var min = Math.min(array[0], array[1])
  var max = Math.max(array[0], array[1])
  var maxProduct = min * max
  
  for(var i = 2; i < array.length; i++){
    var potentialMax = Math.max(array[i] * min, array[i] * max)
    maxProduct = Math.max(maxProduct, potentialMax)
    max = Math.max(max, array[i])
    min = Math.min(min, array[i])
  }
  return maxProduct
}

// maxProductOfTwo([1, 2, 3])

/////////////////

function highestProfit(array){
  var min = Math.min(array[0], array[1])
  var maxProfit = array[1] - array[0]
  
  for(var i = 2; i < array.length; i++){
    var potentialMax = array[i] - min
    maxProfit = Math.max  (potentialMax, maxProfit)
    min = Math.min(min, array[i])
  }
  return maxProfit
}

// highestProfit([1, 2, 3, 4])

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

function iterateList(rootNode){
  
  var current = rootNode
  while(current){
    console.log(current.value)
    current = current.next
  }
}

// iterateList(a)

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

//////////

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

// iterateThroughTree(node)

/////////////////

// depth first
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

// breadth first
function iterateThroughTreeBFS(rootNode){
  var nodeQueue = [node]
  
  while(nodeQueue.length){
    var shiftedNode = nodeQueue.shift()
    console.log(shiftedNode.value)
    if (shiftedNode.left) nodeQueue.push(shiftedNode.left)
    if (shiftedNode.right) nodeQueue.push(shiftedNode.right)
  }
}

// iterateThroughTreeBFS(node)

// Top 10 non-algorithm technical questions

// 1) What happens when I go to google.com
// 2) Explain xyz project
// 3) How did you contribute to xyz team project
// 4) What was the most difficult part of xyz project
// 5) What do you look for when doing code reviews
// 6) Explain something that you learned recently
// 7) Advantages / disadvantages about xyz technology
// 8) Recreate this web page (html, css, js)
// 9) SQL questions (either sketch out relationships or actually make sql calls)
// 10) Create a program using classes (classroom, parking garage etc.)
  
// Top 10 behavioral questions

// 1) Why did you make the change
// 2) Why do you want to work here
// 3) Why did you go to Dev Bootcamp
// 4) Why should we hire you
// 5) What is our mission / values
// 6) What excites you about coding
// 7) Explain a time you disagreed with a coworker / dev
// 8) Explain a time you disagreed with a supervisor
// 9) Explain a time you had to work in an ambiguous situation
// 10) Explain a time you were customer focused
