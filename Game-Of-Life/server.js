var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(matrixSize, grassCount, grEatCount, predatorCount, jurCount, gpredatorCount) {
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < grassCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }

    }

    for (let i = 0; i < grEatCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }

    }
    for (let i = 0; i < predatorCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }

    }


    for (let i = 0; i < jurCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }

    }

    for (let i = 0; i < gpredatorCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }

    }

    return matrix;
}



 matrix = matrixGenerator(20, 15, 20, 5, 4, 2);
 
 io.sockets.emit('send matrix', matrix)


grassArr = []
 grassEaterArr = []
 predatorArr = []
 jurArr = []
 gpredatorArr = []
weath = "winter"
   
     Grass = require("./grass")
     GrassEater = require("./grassEater")
     Predator = require("./predator")
     Jur = require("./jur")
     GPredator = require("./GPredator")

   
    function createObject(matrix) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    var gr = new Grass(x, y)
    
                    grassArr.push(gr)
                } else if (matrix[y][x] == 2) {
                    var grEat = new GrassEater(x, y)
    
                    grassEaterArr.push(grEat)
                } else if (matrix[y][x] == 3) {
                    var pre = new Predator(x, y)
    
                    predatorArr.push(pre)
    
    
                } else if (matrix[y][x] == 4) {
                    var pre = new Jur(x, y)
    
                    jurArr.push(pre)
                }
    
            else if (matrix[y][x] == 5) {
                var pre = new GPredator(x, y)
    
                gpredatorArr.push(gre)
            
            }
        }
    
    
        }
        io.sockets.emit("send matrix", matrix)


    }


    

    function game() {
      
    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let j in grassEaterArr) {
        grassEaterArr[j].mul()
        grassEaterArr[j].eat()
    }

    for (let j in predatorArr) {
        predatorArr[j].mul()
        predatorArr[j].eat()

    }

    for (let j in jurArr) {
        jurArr[j].mul()

    }

    for (let j in gpredatorArr) {
        gpredatorArr[j].mul()
        

    }
}

setInterval(game, 200)

    function kill() {
        grassArr = [];
        grassEaterArr = []
        predatorArr = []
        jurArr = []
        gpredatorArr = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
            }
        }
        io.sockets.emit("send matrix", matrix);
    }

        function addGrass() {
            for (var i = 0; i < 7; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 1
                    var gr = new Grass(x, y, 1)
                    grassArr.push(gr)
                }
            }
            io.sockets.emit("send matrix", matrix);
        }
        
        function addGrassEater() {
            for (var i = 0; i < 7; i++) {   
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 2
                    grassEaterArr.push(new GrassEater(x, y, 2))
                }
            }
           io.sockets.emit("send matrix", matrix);
        }


        function addJur() {
            for (var i = 0; i < 7; i++) {   
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 3
                    jurArr.push(new Jur(x, y, 3))
                }
            }
           io.sockets.emit("send matrix", matrix);
        }

        function addPredator() {
            for (var i = 0; i < 7; i++) {   
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 4
                    predatorArr.push(new Predator(x, y, 4))
                }
            }
           io.sockets.emit("send matrix", matrix);
        }


       function addGPredator() {
        for (var i = 0; i < 7; i++) {   
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4
                gpredatorArr.push(new GPredator(x, y, 5))
            }
        }
       io.sockets.emit("send matrix", matrix);
    }


    
 


    function weather() {
        if (weath == "winter") {
            weath = "spring"
        }
        else if (weath == "spring") {
            weath = "summer"
        }
        else if (weath == "summer") {
            weath = "autumn"
        }
        else if (weath == "autumn") {
            weath = "winter"
        }
        io.sockets.emit('weather', weath)
    }
    setInterval(weather, 5000);
    

    

     
io.on('connection', function (socket) {
    createObject(matrix)
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add jur", addJur);
    socket.on("add predator", addPredator);
    socket.on("add gpredator", addGPredator);
    

})

var statistics = {};


setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.jur = jurArr.length;
    statistics.predator = predatorArr.length;
    statistics.gpredator = gpredatorArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)
