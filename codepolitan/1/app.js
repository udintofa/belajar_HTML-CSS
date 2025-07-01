const clickme = document.querySelector('#clickme');

clickme.onclick = function () {
    console.log('Ini hasil onclick di app.js')
}

const warna = document.querySelector('.warna')
const warnaSekarang = document.querySelector('#bg')

const generateRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}

warna.addEventListener('click', () => {
    newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    warnaSekarang.innerText = newColor;
})