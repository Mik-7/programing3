
var socket = io()

var side = 35;

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var jurArr = []
var gpredatorArr = []

function setup() {
   
    createCanvas(20 * side, 20 * side);


}


function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")

            } else if (matrix[y][x] == 4) {
                fill("blue")

            } else if (matrix[y][x] == 5) {
                fill("white")
            }else

            {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

}


     socket.on('send matrix', nkarel)