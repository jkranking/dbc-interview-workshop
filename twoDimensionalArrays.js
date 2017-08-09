// find the largest square of zeros in the 2d array - ie 2 (2 x 2), 4 (4 x 4), etc

var grid = [
  [0, 0, 0, 0, 1], //0
  [0, 0, 0, 0, 1], //1
  [0, 1, 0, 0, 0], //2
  [0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0], //4
];

function findLargestSquare(grid){
  var largestSquare = 0
  
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      if(grid[i][j] === 0){
        var potentialLargestSquare = findSquare(i, j)
        largestSquare = Math.max(largestSquare, potentialLargestSquare)
      }
    }
  }
  return largestSquare
}

function findSquare(i, j, size=1){
  var largerSquare = true
  for(var counter = 0; counter <= size; counter++){
    if(!grid[i+counter] || grid[i+counter][j+size] !== 0){
      largerSquare = false
      break;
    }
    if(!grid[i+size] || grid[i+size][j+counter] !== 0){
      largerSquare = false
      break;
    }
  }
  if(largerSquare){
    return findSquare(i, j, size+1)
  } else {
    return size
  }
}
  
findLargestSquare(grid)

////////////////////////////

// find the coordinates of the rectangle made up of zeros

var grid = [
  [1, 1, 1, 1, 1], //0
  [1, 1, 1, 1, 1], //1
  [1, 1, 1, 1, 1], //2
  [0, 0, 0, 0, 1], //3
  [0, 0, 0, 0, 1], //4
];


function findRectangle(image){
  var topLeftCoord
  var width
  var height  
  
  for(var i = 0; i < image.length; i++){
    for(var j = 0; j < image[i].length; j++){
     
      if(!topLeftCoord && image[i][j] === 0){
        topLeftCoord = [i, j]
      }
      
      if(topLeftCoord && !width){
        if(image[i][j+1] !==0){
          width = j - topLeftCoord[1] + 1
          break;
        }
      }
    }
  }
  
  for(var row = topLeftCoord[0] + 1; row < image.length; row++){
    var col = topLeftCoord[1]
    if(!image[row+1] || image[row+1][col] !== 0){
      height = row - topLeftCoord[0] + 1
      break;
    }
  }   
      
  return ["start Coordinates:", topLeftCoord, "width/height:", [width, height]]
}

findRectangle(image)


/////////

// find the largest island made up of 2s in the grid

var islands = [
    [1, 2, 1, 1],
    [1, 2, 1, 2],
    [1, 2, 1, 1],
    [1, 1, 2, 1]
  ]

function findIslands(islands){
  var searchedCoordinates = {}
  var size = 0
  
  for(var i = 0; i < islands.length; i++){
    for(var j = 0; j < islands.length; j++){
      if(islands[i][j] === 2 && !searchedCoordinates[i.toString() + j.toString()]){
        var coordinateStack = [[i, j]]
        var newSize = 0
        
        while(coordinateStack.length){
          var coordinate = coordinateStack.pop()
          for(var k = coordinate[0]-1; k <= coordinate[0]+1; k++){
            for(var l = coordinate[1]-1; l <= coordinate[1]+1; l++){
              if(islands[k] && islands[k][l] === 2 && !searchedCoordinates[k.toString() + l
              .toString()]){

                searchedCoordinates[k.toString() + l.toString()] = true
                coordinateStack.push([k, l])
                newSize++
              }
            }
          }
        }
        size = Math.max(size, newSize)
      }
    }
  }
  return size
}

findIslands(islands)