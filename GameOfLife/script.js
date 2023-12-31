function matrixGenerator(matrixSize, grassCount, grassEaterCount, virusCount, predatorCount, antivirusCount) {
    let matrix = []
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }

    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < virusCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 1 || 4 ) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < antivirusCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    return matrix
}
let matrix = matrixGenerator(20, 5, 40, 18, 10, 10)
let side = 30


let grassArr = []
let grassEaterArr = []
let predatorArr = []
let antivirusArr = []
let virusArr = []

function setup() {
    frameRate(10)
    createCanvas(matrix[0].length * side, matrix.length * side)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            }else if(matrix[y][x] == 2){
             let grEat = new GrassEater(x,y)
             grassEaterArr.push(grEat)
            }else if(matrix[y][x] == 3){
                // let vir = new Virus(x,y)
                // virusArr.push(vir)
            }else if(matrix[y][x] == 4){
                let pre = new Predator(x,y)
                predatorArr.push(pre)
            }else if(matrix[y][x] == 5){
                // let avir = new Antivirus(x,y)
                // antivirusArr.push(avir)
            }  
      }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2){
             fill("yellow")
            } else if (matrix[y][x] == 3){
                fill("purple")
            }else if (matrix[y][x] == 4){
                fill("red")
            }else if (matrix[y][x] == 5){
                fill("pink")
            }else {
                fill("gray")
            } 
            rect(x * side, y * side, side, side)
        }
    }



    for (let i in grassArr) {
        grassArr[i].mul()
    }


    for(let i in grassEaterArr){
          grassEaterArr[i].eat()
    }

    
    // for (let i in virusArr) {
    //     virusArr[i].infection()
    // }
    for(let i in predatorArr){
        predatorArr[i].eat()
    }
    // for(let i in antivirusArr){
    //     if(virusArr.length >= matrix.length ** 2 - 1){
    //         antivirusArr[i].eat()

    //     }
    // }

    console.log(grassArr);
}

console.log("Hellow world !!!!");