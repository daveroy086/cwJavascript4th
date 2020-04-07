
function validSolution(sudokuArray){

    function aTest(aRowColumnOrSubArray){
        if(aRowColumnOrSubArray.slice().sort().every(function(value, index){return value === aSudokuSet[index]}) == false ){
            return false;        
        }
    }

    var aSudokuSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //test to see if every sudokuArray row is a complete sudoku set
    for (var i = 0; i < sudokuArray[0].length; i++){
      if(aTest(sudokuArray[i]) == false){
        return false;
      }
    }
    
    //test to see if each column is a complete sudoku set
    for(let j = 0; j < sudokuArray.length; j++){
      var aColumn = [];
      for(let k = 0; k < sudokuArray[j].length; k ++){
          aColumn.push(sudokuArray[k][j]);
      }
      if(aTest(aColumn) == false){
        return false;
      }
    }

    //create starting points for nine sub-arrays
    var startingPoints =[];
    for(let m = 0; m < 8; m = m + 3){
      for(let n = 0; n < 8; n = n + 3){
        startingPoints.push([m, n]);
      }
    }

    //create an possible solution set based on each starting point
    for(let r = 0; r < 9; r ++){
        var aSubArray = [];
        for(let p = 0; p < 3; p++){
            for(let q = 0; q < 3; q++){
                aSubArray.push(sudokuArray[startingPoints[r][0] + p][startingPoints[r][1] + q]); 
              }
        }
        if (aTest(aSubArray) == false){
          return false;
        }
    }

    return true;
      
}
/*
var sudokuArray =[[5, 3, 4, 6, 7, 8, 9, 1, 2],
                  [6, 7, 2, 1, 9, 5, 3, 4, 8],
                  [1, 9, 8, 3, 4, 2, 5, 6, 7],
                  [8, 5, 9, 7, 6, 1, 4, 2, 3],
                  [4, 2, 6, 8, 5, 3, 7, 9, 1],
                  [7, 1, 3, 9, 2, 4, 8, 5, 6],
                  [9, 6, 1, 5, 3, 7, 2, 8, 4],
                  [2, 8, 7, 4, 1, 9, 6, 3, 5],
                  [3, 4, 5, 2, 8, 6, 1, 7, 9]];

validSolution(sudokuArray);
*/


validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
