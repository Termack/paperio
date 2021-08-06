var canvas = document.querySelector("canvas")

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vel = {
            x: 0,
            y: 0
        }
        this.speed = 5
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        c.fillStyle = this.color
        c.fill()
    }

    move() {
        this.x += this.vel.x * this.speed
        this.y += this.vel.y * this.speed
    }
}

player = new Player(100, 100, 20, getRandomColor())

function update() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.draw()
    player.move()
}

window.addEventListener('mousemove', e => {
    angle = Math.atan2(e.clientY - player.y, e.clientX - player.x)
    velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    }
    player.vel = velocity
})

window.onload = setInterval(function () { update() }, 1000 / 30);
