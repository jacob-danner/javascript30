const root = document.querySelector(':root')

const color_select = document.getElementById('color')
color_select.addEventListener('input', () => {
    root.style.setProperty("--base", color_select.value);
})

const fontSlider = document.getElementById('font')
fontSlider.addEventListener('change', () =>{
    root.style.setProperty("--font", fontSlider.value + "px")
})