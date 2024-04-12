const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class boundary{
    constructor({posicao}){
        this.posicao = this.posicao
        this.width = 40
        this.height = 40
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.posicao.x, this.posicao.y, this.width, this.height)
    }
}

const limite = new boundary({
    posicao: {
        x: 0,
        y: 0 
    }
})

boundary.draw()