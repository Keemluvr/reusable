const grid = document.querySelector('.grid')

// Cria uma imagem dinamicamente
const createImg = url => {
    const img = document.createElement('img')
    img.src = url
    return img
}

// Adiciona todas as imagens ao grid
let i = 1
setInterval(() => {
    if(i < 81) {
        i++
        grid.appendChild(createImg(`./img/${i}.jpg`))
    }
}, 120)