let colourR = Math.floor(Math.random()*256)
let colourG = Math.floor(Math.random()*256)
let colourB = Math.floor(Math.random()*256)

console.log(`rgb(${colourR},${colourG},${colourB})`)




let buttonRandom = document.querySelector('.randomize')

buttonRandom.addEventListener('click', event => {
  let colourR = Math.floor(Math.random()*256)
  let colourG = Math.floor(Math.random()*256)
  let colourB = Math.floor(Math.random()*256)
  let bodyElement = document.querySelector('body')
  
  bodyElement.style.backgroundColor = `rgb(${colourR},${colourG},${colourB})`
})