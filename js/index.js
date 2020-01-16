// Make a button clickable (and do something!)

let randomBtn = document.querySelector('.randomize')   // Find the button
randomBtn.addEventListener('click', (event) => {  // Assign a click listener to the button

  // Randomize an rgb(#,#,#) string
  let colourR = Math.floor(Math.random() * 256) // Red
  let colourG = Math.floor(Math.random() * 256) // Green
  let colourB = Math.floor(Math.random() * 256) // Blue
  console.log(`Random color: rgb(${colourR}, ${colourG}, ${colourB})`) // Test

  // Assign the rgb(#,#,#) string to the background colour of the body
  let bodyElement = document.querySelector('body') // Find the body
  bodyElement.style.backgroundColor = `rgb(${colourR}, ${colourG}, ${colourB})` // Assign a color

})



