
//** my code (*) = done  */

//* STARTING AT THE BEGINNING 
//! PART ONE 
// create grid- play with sizing (*)
// create one block snake - get 'snake' moving with keyboard movement (*)

//! PART TWO
// snake move on key trigger 
// snake moving on a timer 
// get snake to be longer - towards growing 
// create 'food' element (*)
// food to randomly appear in 'foodPosition'

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
  //* DOM 
  const grid = document.querySelector('.grid')

  // links to DOM needed 
  // Go button/trigger 
  // score board display 
  // maybe audio 

  console.log(grid)
  //* Variables 
  const width = 20 
  const cellCount = width * width
  const cells = []

  const snakeClass = 'snake' 
  const foodClass = 'food'

  // let snakeDirection = 'right'
  let snakePosition = [209]
  let foodAppear = 0

  //needed endgame, score, ?? 

  //** The Grid 

  function createSnakeGrid(snakePosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
      // console.log(cell)
    }
    // addSnake(startingPosition)
    addSnake(snakePosition)
    // snakeMove()
    randomFoodPosition()
    addFood(foodAppear)
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
    // removeSnake(snakePosition)

    let horizontalPosition = snakePosition % width
    let verticalPosition = Math.floor(snakePosition / width)

    switch (event.keyCode) {
      case 39: //arrow right 
        if (horizontalPosition < width - 1) snakePosition++
        lastKeyPressed = 'right'
        console.log('i have moved right')
        break 
      case 37: //arrowleft
        if (horizontalPosition > 0) snakePosition--
        lastKeyPressed = 'left'
        console.log('move left')
        break 
      case 38: //arrowup
        if (verticalPosition > 0) snakePosition -= width
        lastKeyPressed = 'up'
        console.log('move up')
        break 
      case 40: //arrow down 
        if (verticalPosition < width - 1) snakePosition += width
        lastKeyPressed = 'down'
        console.log('move down')
        break 
      default: 
        console.log('INVALID KEY')
    }
    addSnake(snakePosition)
  }
  // function moveOne() {
  //   const horizontalPosition = snakePosition % width

  //   if (horizontalPosition < width - 1) snakePosition++
  //   lastKeyPressed = 'right'
  // }
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
  function snakeEat() { 
    if (foodAppear === snakePosition[0]) {
      removeFood(foodAppear)
      randomFoodPosition()
      addFood(foodAppear)
      eatSound()
    }
  }

  // function gameOver() {
  // // if snake hits the wall or itself - GAME OVER 
  // // true or false keep playing/game over 

  // }
  //* Food 
  //Add the food  //Remove the food

  function addFood(position) {
    cells[position].classList.add(foodClass)
    console.log()
  }
  function removeFood(position){
    cells[position].classList.remove(foodClass)
  }

  function randomFoodPosition() {
    const randomCell = Math.floor(Math.random() * cellCount)
    // food can be anywhere that the snake isnt at that moment 
    if (snakePosition.includes(randomCell)) randomFoodPosition()
    else foodAppear = randomCell
    // if (snakePosition === randomFoodPosition() => {

    // })
    // else foodAppear = randomCell
  }
 
  //* sounds 
  function eatSound(){ 
    Audio.src = 'https://www.youtube.com/watch?v=kQDLUoo0olY'
    Audio.play()
  } 


  //* Event Listeners 
  document.addEventListener('keyup', handleChangeDirection)
  createSnakeGrid(snakePosition)
}
window.addEventListener('DOMContentLoaded', init)