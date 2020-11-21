
//* STARTING AT THE BEGINNING 
//! PART ONE 
// create grid- play with sizing
// create one block snake - get 'snake' moving with keyboard movement 

//! PART TWO
// snake move on key trigger 
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

//* Getting Started
  //* *Variables 
  //** */ Functions 
//* The Snake 

 //* Grow the Snake 

 //* Move the Snake 

 //* Add the food 

 //* Remove the food 

  //** Event Listeners 








console.log('js is working here')

function init() {



  console.log('js also working here')
  //* Variables 
  const grid = document.querySelector('.grid')
  console.log(grid)

  const width = 20 
  const cellCount = width * width
  const cells = []

  const snakeClass = 'snake' 
  const snakeStart = 0

  const foodClass = 'food'
  const foodPosition = 0

  //** The Grid 

  function createSnakeGrid(startingPostion) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSnake(startingPostion)
    // console.log(createSnakeGrid[1,1])
  }

  //* The Snake to the grid 
  function addSnake(position) {
    cells[position].classList.add(snakeClass)
  }


  //* Grow the Snake 


  //* Move the Snake 

  //* Add the food 

  //* Remove the food 

  //* Event Listeners 
  addSnake(snakeStart)
  createSnakeGrid(snakeStart)
}
window.addEventListener('DOMContentLoaded', init)