class Virus {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
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
    let found = []

    for (let i in this.directions) {
        let x = this.directions[i][0]
        let y = this.directions[i][1]


        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char1 || char2 ) {
                found.push(this.directions[i])
            }
        }
    }
    return found
}


infection() {
    let foods = this.chooseCell(1,4)
    let food = random(foods)

    if (food) {
        this.energy+=5
        let newX = food[0]
        let newY = food[1]
        matrix[newY][newX] = 3
        matrix[this.y][this.x] = 0

        for (let i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1)

                break;

            }
        }   
         for (let i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                predatorArr.splice(i, 1)

                break;

            }
        }
        this.x = newX
        this.y = newY

        // if(this.energy >= 27){
        //     this.mul()
        }
    }
}
//         mul() {

//             let emptyCell = this.chooseCell(0)
//             let newCell = random(emptyCell)
    
//             if (newCell) {
//                 let newX = newCell[0]
//                 let newY = newCell[1]
    
//                 matrix[newY][newX] = 3
    
//                 let vir = new Virus(newX, newY)
//                 virusArr.push(vir)
    
//             }
//         }
    

// }
