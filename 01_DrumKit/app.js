// add keydown event listener
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const targetKey = document.querySelector(`.key[data-key="${e.key}"]`)

    if(!audio) return

    audio.currentTime = 0
    audio.play()

    targetKey.classList.add('playing')
})

// let keys_collection = document.getElementsByClassName('keys')
// const keys = [].slice.call(keys_collection)

// function removeTransition(e) {
//     // if (e.propertyName !== 'transform') return
//     console.log(this)
// }

// keys.forEach(key => {
//     key.addEventListener('transitionend', removeTransition)
// })