tabBar = document.querySelectorAll('button')
console.log(tabBar)

tabBar.forEach(tab => {
    tab.addEventListener('click', console.log(tab))
})