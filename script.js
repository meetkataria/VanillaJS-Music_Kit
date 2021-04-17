document.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio) audio.play();
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    // key.classList.remove('playing');           
});

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));