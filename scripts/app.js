
//* STARTING AT THE BEGINNING 
//! PART ONE 
// create grid- play with sizing
// create one block snake - get 'snake' moving with keyboard movement 

//! PART TWO
// get snake to be longer - towards growing 
// create 'food' element 

//! PART THREE
// work at getting the single cell snake to 'hit' the food 
// identifier - snake hitting food 
// snake moving on a timer 

//! PART 4 
// if snake hits food = snakegrows + snakespeed = snakespeed++ 
// snake moving on it its own to then control by keyboard strokes 
// score box - if snake cell = food cell => score + 1 
// hits wall = end game 

//! additional 
//portal side /top for snake to move round the board 


//! MVP 



console.log('js is running')

function init() {
  console.log('js is still  running')

  //* Variables 
  const grid = document.querySelector('.grid')
  console.log(grid)
  const width = 10 
  console.log(grid.width)
  const cellCount = width * width 
  const cells = []

  const pikaClass = 'pika'
  let pikaPosition = 0


  //* Functions 

  //*Grid Functions 


  function createSnakeGrid(startingPosition) {
    console.log(createSnakeGrid())
    console.log('am i am idiot')

    for (let i = 0; i < cellCount; i++) { 
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPika(startingPosition)
    console.log('clearly yes')
  }
  createSnakeGrid(pikaPosition)

  function addPika(position) {
    cells[position].classList.add(pikaClass)
    createSnakeGrid(pikaPosition)

  }

  window.addEventListener('DOMContentLoaded', init)
}