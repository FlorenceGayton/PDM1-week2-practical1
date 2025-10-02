function setup(){
    createCanvas(400, 300)
}

function draw(){
    background(0)
    rect(0, 0, width / 2, height)
    rect(width / 2, 0, width/ 2, height / 2)
    rect(width / 2, height / 2, width / 4, height / 2)
    rect(width * 0.75, height / 2, width / 4, height / 4)
    rect(width * 0.75, height * 0.75, width / 4, height / 4)
}
