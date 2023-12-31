class Predator {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 22
        this.directions = [ ]

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
} 

chooseCell(char1, char2) {
    this.getNewCoordinates()
    let found = []

    for (let i in this.directions) {
        let x = this.directions[i][0]
        let y = this.directions[i][1]


        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char1) {
                found.push(this.directions[i])
            }
            if (matrix[y][x] == char2) {
                found.push(this.directions[i])
            }
        }
    }
    return found
}

mul() {

    let emptyCell = this.chooseCell(0)
    let newCell = random(emptyCell)

    if (newCell) {
        let newX = newCell[0]
        let newY = newCell[1]

        matrix[newY][newX] = 4

        let pre = new Predator(newX, newY)
        predatorArr.push(pre)

    }
}

eat(){
    let foods = this.chooseCell(1,2)
    let food  = random(foods)
        
       if(food){
           this.energy+=7
           let newX = food[0]
           let newY = food[1]

           matrix[newY][newX] = 4
           matrix[this.y][this.x] = 0

           for(let i in grassArr){
                 if(newX == grassArr[i].x  &&  newY == grassArr[i].y){
                              grassArr.splice( i, 1)

                              break;
                 }
           }


           for(let i in grassEaterArr){
            if(newX == grassEaterArr[i].x  &&  newY == grassEaterArr[i].y){
                         grassEaterArr.splice( i, 1)


                         break;
            }

          }


      this.x = newX
      this.y = newY


           if(this.energy > 48){
                     this.mul()
           }

       }else{
           this.move()
       }
}
  

     move(){
         let emptyCells = this.chooseCell(0)
         let newCell = random(emptyCells)

         if(newCell){
            this.energy--
             let newX = newCell[0]
             let newY = newCell[1]
  
             matrix[newY][newX] = 4
             matrix[this.y][this.x] = 0
  
             this.x = newX
             this.y = newY
  
  
             if(this.energy <= 0){
                        this.die()
             }
        }
     }

     die(){
        matrix[this.y][this.x] = 0
        for(let i in predatorArr){
           if(this.x == predatorArr[i].x && this.y == predatorArr[i].y){
                     predatorArr.splice(i, 1)
                     break;
           }
        }
    }

    }