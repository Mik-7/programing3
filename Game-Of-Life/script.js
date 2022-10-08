
var socket = io()

var side = 35;



function setup() {
   
    createCanvas(20 * side, 20 * side);


}

socket.on("weather", function (data) {
    weath = data;
})
weath = "winter"




function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            
            if (matrix[y][x] == 1) {
                if(weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("#333300");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("#4dffa6");
                }
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


     socket.on("send matrix", nkarel)


     function kill() {
        socket.emit("kill")
    }

    function addGrass(){
        socket.emit("add grass")
    }

    function addGrassEater(){
        socket.emit("add grassEater")
    }

    function addJur(){
        socket.emit("add jur")
    }

    function addPredator(){
        socket.emit("add predator")
    }

    function addGPredator(){
        socket.emit("add gpredator")
    }

