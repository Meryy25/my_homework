var islandPerimeter = function(grid) {
    const size = grid.length;
    let sum = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                sum += 4;
               if(i > 0 && grid[i - 1][j] === 1)
                  sum -= 2;
               if(j > 0 && grid[i][j - 1] === 1)
                  sum -=2;
            }
        } 
    }    
    return sum;
}

let arr = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]];
console.log(islandPerimeter(arr));
