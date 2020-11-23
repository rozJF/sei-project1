
//* STARTING AT THE BEGINNING 
//! PART ONE 
// create grid- play with sizing
// create one block snake - get 'snake' moving with keyboard movement 

//! PART TWO
// snake move on key trigger 
// snake moving on a timer 
// get snake to be longer - towards growing 
// create 'food' element 

//! PART THREE
// work at getting the single cell snake to 'hit' the food 
// identifier - snake hitting food 

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
  let snakeStart = 0

  let lastKeyPressed = 'right'
  const foodClass = 'food'
  let foodPosition = 10

  //** The Grid 

  function createSnakeGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
      // console.log(cell)
    }
    // addSnake(startingPosition)
    addSnake(startingPosition)
    snakeMove()
    addFood(foodPosition)
  }

  //* The Snake to the grid 
  function addSnake(position) {
    cells[position].classList.add(snakeClass)

  }
  function removeSnake(position){
    cells[position].classList.remove(snakeClass)
  }  // addSnake(snakeStart)

  //* Grow the Snake 


  //* Move the Snake 
  function handleChangeDirection (event) {
    removeSnake(snakeStart)

    const horizontalPosition = snakeStart % width
    const verticalPosition = Math.floor(snakeStart / width)

    switch (event.keyCode) {
      case 39: //arrow right 
        if (horizontalPosition < width - 1) snakeStart++
        lastKeyPressed = 'right'
        // console.log('i have moved right')
        break 
      case 37: //arrowleft
        if (horizontalPosition > 0) snakeStart--
        lastKeyPressed = 'left'
        // console.log('move left')
        break 
      case 38: //arrowup
        if (verticalPosition > 0) snakeStart -= width
        lastKeyPressed = 'up'
        // console.log('move up')
        break 
      case 40: //arrow down 
        if (verticalPosition < width - 1) snakeStart += width
        lastKeyPressed = 'down'
        // console.log('move down')
        break 
      default: 
        console.log('INVALID KEY')
    }
    addSnake(snakeStart)
  }
  function moveOne() {
    const horizontalPosition = snakeStart % width

    if (horizontalPosition < width - 1) snakeStart++
    lastKeyPressed = 'right'
  }
  function snakeMove() {
  //every second snake moves one position in the direction of the last key press 
  // once function called - GO 
  // first move on 
    // setInterval(() => { 
    // //   console.log('setInterval fired')
    // //   console.log(new Date())
    // // }, 1000) 
    //     }

  }

  function gameOver() {
  // if snake hits the wall or itself - GAME OVER 
  // true or false keep playing/game over 

  }

  //* Add the food  //* Remove the food 
  // function addFood() {
  //   cells[position].classList.add(foodClass)
  // }
  // addFood()

  function addFood(position) {
    cells[position].classList.add(foodClass)
    console.log(addFood)
  }
  function removeFood(position){
    cells[position].classList.remove(foodClass)
  }

  function randomFoodPosition() {
    const randomCell = Math.floor(Math.random() * cellCount)

  }

 

  //* Event Listeners 
  document.addEventListener('keyup', handleChangeDirection)
  createSnakeGrid(snakeStart)
}
window.addEventListener('DOMContentLoaded', init)