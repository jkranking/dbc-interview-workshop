// fibonacci sequence

function fib(n){
  var prev = 1
  var prevPrev = 0
  var current
  
  for(var i = 1; i < n; i++){
    current = prev + prevPrev
    prevPrev = prev
    prev = current
  }
  return current
}

fib(5)

// recursive fibonacci

function fib(n){
  if(n <= 1){ return n}
  return fib(n - 1) + fib(n - 2)
}

fib(5)

////////////////

// return the highest profit in an array of numbers (stocks). You must first buy then sell. 

function highestProfit(stocks){
  var min = Math.min(stocks[0], stocks[1])
  var maxProfit = stocks[1] - min
  
  for(var i = 2; i <= stocks.length-1; i++){
    var potentialProfit = stocks[i] - min
    maxProfit = Math.max(potentialProfit, maxProfit)
    min = Math.min(min, stocks[i])
  }
  return maxProfit
}

highestProfit([1, 2, 3, 5])

///////////////

// return indexes that sum to the target number

function twoSum(target, numArray){
  var savedNum = {},
      results = [];
      
  for(var i = 0; i < numArray.length;i++){
    if(savedNum.hasOwnProperty(numArray[i])){
      results[0] = savedNum[numArray[i]];
      results[1] = i;
      return results;
    } else {
      savedNum[target - numArray[i]] = i;
    }
  }
}

twoSum(5, [4, 0, 1])

////////////

// find repeat number

function findRepeatNumber(numsArray){
  var exists = {};
  
  for(var i = 0; i < numsArray.length; i++){
    var number = numsArray[i]
    if(exists.hasOwnProperty(number)){
      return number;
    } else {
      exists[number] = true;
    }
  }
  throw new Error("no repeat");
}

// find unique character in an array

function findUniqueCharacter(string){
  var saved = {};
  for(var i = 0; i < string.length; i++){
    if(saved.hasOwnProperty(string[i])){
      saved[string[i]]++;
    } else {
      saved[string[i]] = 1;
    }
  }
  
  for(var j = 0; j < string.length; j++){
    if(saved[string[j]] === 1){
      return string[j]
    }
  }
  
  throw new Error("no unique character found")
}

findUniqueCharacter("aabbddcce")

////////////////

// find unique number - xor - exclusive or operator

function findUniqueNumber(nums) {

    var uniqueNum = 0;

    deliveryIds.forEach(function(num) {
        uniqueNum ^= num;
    });

    return uniqueNum;
}

///////////////////

// find the highest product of 3 in an array

function highestProductOf3(array){
  var lowest = Math.min(array[0], array[1])
  var highest = Math.max(array[0], array[1]) 
  var lowestProductOf2 = array[0] * array[1]
  var highestProductOf2 = array[0] * array[1]
  var highestProductOf3 = array[0] * array[1]  * array[2]
  
  for(var i = 2; i <= array.length-1;i++){
    highestProductOf3 = Math.max(
      lowestProductOf2 * array[i],
      highestProductOf2 * array[i],
      highestProductOf3
    )
    
    highestProductOf2 = Math.max(
      lowest * array[i],
      highest * array[i],
      highestProductOf2
    )
    
    lowestProductOf2 = Math.min(
      lowest * array[i],
      highest * array[i],
      lowestProductOf2
    )
    
    lowest = Math.min(array[i], lowest)
    highest = Math.max(array[i], highest)
  }
  return highestProductOf3
}

////////////////////

// merge two sorted arrays

function mergeTwoArrays(array1, array2){
  var elm1 = array1[0]
  var elm2 = array2[0]
  var i = 1
  var j = 1
  var results = []
  
  while(elm1 || elm2){
    if(!elm2 || elm1 < elm2){
      results.push(elm1)
      elm1 = array1[i++]
    } else {
      results.push(elm2)
      elm2 = array2[j++]
    }
  }
  return results
}

mergeTwoArrays([1, 2, 3, 4, 5], [3, 4, 5, 6])

/////////////////

// recursive flatten array

function flatten(array){
  var flattened = []
  
  array.forEach(function(element){
    if(Array.isArray(element)){
      flattened.push(...flatten(element))
    } else {
      flattened.push(element)
    }
  })
  return flattened
}

flatten([1, 2, 3, [1, [1, 2, 3]]])

////////////////////////////

// how many moves does it take to sort an array of zeroes and ones

function moves(a) {

    var startIndex = 0,
        endIndex = a.length-1,
        moves = 0;
        
    while(startIndex < endIndex){
      if(a[startIndex] % 2 !== 0){
        while(a[endIndex] % 2 !== 0 && endIndex > startIndex){
          endIndex--;
        }
        if(a[endIndex] % 2 === 0){
          moves++;
        }
        endIndex--;
      }
      startIndex++;
    }
    return moves;
}

//////////////////////////

// find the bit compliment of an integer

function getComplement (num) {
    var result = 0;
    
    var bits = num.toString(2);
    var complement = '';

    for (var i=0; i<bits.length; i++) {
        if(bits[i] === '0'){
          complement+='1'
        } else {
          complement+='0'
        }
    }

    result = parseInt(complement, 2);
    return result;
}

getComplement(8)

/////////////////////////

// recursive binary search (return index if found)

function binarySearch(array, target, startIndex, endIndex){
  
  if(!endIndex){
    startIndex = 0
    endIndex = array.length-1
  }
  
  var mid = Math.floor((startIndex + endIndex) / 2)
  if(array[mid] === target){
    return mid
  } else if (startIndex >= endIndex){
    throw new Error("target not found")
  } else if (array[mid] < target){
    return binarySearch(array, target, mid+1, endIndex)
  } else {
    return binarySearch(array, target, startIndex, mid-1)
  }
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

binarySearch(array, 3)

// nonrecursive binary Search (return true if found)

function binarySearch(node, target){
  var current = node
  
  while(current) {
    if (current.value === target){
      return true
    } else if (current.value > target){
      current = current.left
    } else if (current.value < target){
      current = current.right
    }
  }
  return false
}

///////////////////////

// merge overlapping meeting times for someones calendar (interview cake)

function mergeRanges(array){
  sortedTimes = array.slice().sort(function(a, b){
    return a.startTime > b.startTime
  })

  mergedTimes = [sortedTimes[0]]

  for(var i = 1;i < sortedTimes.length; i++){
    var current = sortedTimes[i]
    var lastMergedMeeting = mergedTimes[mergedTimes.length-1]
    if(current.startTime <= lastMergedMeeting.endTime){
      lastMergedMeeting.endTime = Math.max(current.endTime, lastMergedMeeting.endTime)

    } else {
      mergedTimes.push(current)
    }

  }
  return mergedTimes
}

array = [
    {startTime: 0,  endTime: 2},
    {startTime: 1,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 3,  endTime: 8}
  ]

mergeRanges(array)

/////////////////////////////

// is str2 a rotated string of str1

function stringRotation(str1, str2) {
  if (!str1 || !str1.length || !str2 || !str2.length) throw Error('invalid input');
  if (str1.length !== str2.length) return false
  
  return (str2 + str2).indexOf(str1) > -1
}

stringRotation('waterbottle', 'erbottlewat')

//////////////////////////////

// is every character unique

function isUnique3(str) {
  str = str.split``.sort();
  const length = str.length;

  for (let i = 0; i < length; i++) {
    if (str[i] === str[i + 1]) return false
  }
  return true
}

////////////////////////////

// find all string permutations

function getAllStringPerms(string){
  if(string.length <= 1) {return [string]}
  
  var lastChar = string[string.length-1]
  var allButLast = string.slice(0, -1)
  var getPerms = getAllStringPerms(allButLast)
  var newPerms = []
  
  getPerms.forEach(function(perm){
    for(var i = 0; i <= allButLast.length; i++){
      var newPerm = perm.slice(0, i) + lastChar + perm.slice(i)
      newPerms.push(newPerm)
    }
  })
  return newPerms
}

getAllStringPerms("abc")

////////////////////////////

// reverse words in a sentence

function reverseWordsInSentence(string){
  var stringArray = string.split(" ")
  var reversedSentence = reverseWords(stringArray)
  return reversedSentence.join(" ")
}

function reverseWords(words){
  var startIndex = 0
  var endIndex = words.length-1
  while (startIndex < endIndex){
    var temp = words[startIndex]
    words[startIndex] = words[endIndex]
    words[endIndex] = temp
    startIndex++
    endIndex--
  }
  return words
}

reverseWordsInSentence("hello otters, blahblah")

///////////////////////////

// valid parenthesis in string?

function parenthesis(string){
  var parens = 0
  for(var i = 0; i <= string.length-1;i++){
    if (string[i] === "("){
      parens++
    } else if (string[i] === ")"){
      parens--
    }
  }
  return parens===0
}

parenthesis("(())()")

// valid parenthesis, brackets, and curly braces in string

function parenthesis(string){
  var parens = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
  }
  
  var openers = ["{", "(", "["]
  var closers = [")", "]", "}"]
  
  var saved = []
  
  for(var i=0;i <= string.length-1;i++){
    if (openers.includes(string[i])) {
      saved.push(string[i])
    } else if (closers.includes(string[i])) {
      var popped = saved.pop()
      if (parens[popped] !== string[i]){
        return false
      }
    }
  }
  return !saved.length
}

parenthesis("[(){}{}]")

//////////////////////////

// is the string a palindrome

function palindrome(string){
  var startIndex = 0
  var endindex = string.length-1
  
  while(startIndex < endindex){
    if (string[startIndex] !== string[endindex]) return false
    startIndex++
    endindex-- 
  }
  return true
}

palindrome("tacocat")

//////////////////////////

// create function that can handle both sum(1)(2) and sum(1, 2)

function sum(x, n=null) {
  if (n) {
    return x + n;
  } else {
    return function(y) { return x + y; };
  }
}

sum(1)(2)
sum(1, 2)

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