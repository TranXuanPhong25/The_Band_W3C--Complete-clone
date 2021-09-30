const images = ['https://www.w3schools.com/w3images/ny.jpg', 'https://www.w3schools.com/w3images/la.jpg', 'https://www.w3schools.com/w3images/chicago.jpg']
let x = 0
function recursion_slide() {
    if (x >= 0 && x < 3) {


        document.querySelector('#slider').style.backgroundImage = `url(${images[x]})`
        document.querySelector('#slider p').textContent = 'new york' + x
        document.querySelector('#slider h1').textContent =  'p'+ x
        x++

    }
    if (x == 3) {
        x = 0
    }
}

const slider = setInterval(recursion_slide, 5000)
