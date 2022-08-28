const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
},1000);

}
 
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario) .bottom.replace("px","")

if (pipePosition <= 50 && pipePosition > 0   &&  marioPosition < 125) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './img/game-over.png'
    mario.style.width = "40px "
    mario.style.marginLeft = "10px";

    clearInterval(loop)
}

},10);

 


document.addEventListener("keydown",jump );