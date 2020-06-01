let distorcion = document.querySelector ('.distorcion')

new hoverEffect({
    parent: distorcion,
    intensity: 0.2,
    image1: './img/photo-1.jpg',
    image2: './img/photo-2.jpg',
    angle: Math.PI / 5,
    speedIn: 2,
    SpeedOut: 15,
    displacementImage: './img/diss.png'
})
