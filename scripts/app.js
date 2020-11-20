
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
console.log('js is working here')

function init() {



  console.log('js also working here')
  //* Variables 
  const grid = document.querySelector('.grid')
  console.log(grid)

  const width = 20 
  const cellCount = width * width
  const cells = []

  //** The Grid 

  function createSnakeGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  //* The Snake 

  //* Grow the Snake 


  //* Move the Snake 

  //* Add the food 

  //* Remove the food 

  //* Event Listeners 
  createSnakeGrid()
}
window.addEventListener('DOMContentLoaded', init)