
//** my code (*) = done  */

//* STARTING AT THE BEGINNING 
//! PART ONE 
// create grid- play with sizing (*)
// create one block snake - get 'snake' moving with keyboard movement (*)

//! PART TWO
// snake move on key trigger 
// snake moving on a timer 
// get snake to be longer - towards growing (*)
// create 'food' element (*)
// food to randomly appear in 'foodPosition'(*)

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
  // let playSounds = document.querySelectorAll('sounds')
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
  const snakeTail = 'tail'
  

  let direction = 'right'
  let snakePosition = [209, 210, 211, 212]
  let foodAppear = 0
  let score = 0
  let timer = 0
  let time = 100

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
  function addSnake(snakePosition) {
    cells[snakePosition].classList.add(snakeClass)

  }
  function removeSnake(position){
    cells[position].classList.remove(snakeClass)
  }  // addSnake(snakeStart)

  //* Grow the Snake 
  // function addsnakeTail(position) {
  //   cells[snakePosition].classList.add(snakeTail)

  // } addsnakeTail(snakePosition.push)

  //* Move the Snake 
  // function handleKeyTap (event) 
  function moveSnake(event) {
    removeSnake(snakePosition) 
    // remove last position .pop ? 

    let horizontalPosition = snakePosition[0] % width
    let verticalPosition = Math.floor(snakePosition[0] / width)

    switch (event.keyCode) {
      case 39: //arrow right 
        if (horizontalPosition < width - 1) snakePosition[0]++
        console.log('i have moved right')
        if (foodAppear === snakePosition[0] ) {        
          console.log(`eat food score is ${score}`)
          removeFood(foodAppear) 
          randomFoodPosition()
          addFood(foodAppear)

        }
        break 
      case 37: //arrowleft
        if (horizontalPosition > 0) snakePosition[0]--
        console.log('move left')
        if (foodAppear === snakePosition[0] ) {        
          console.log(`eat food score is ${score}`)
          removeFood(foodAppear) 
          randomFoodPosition()
          addFood(foodAppear)
        }
        break 
      case 38: //arrowup
        if (verticalPosition > 0) snakePosition[0] -= width
        console.log('move up')
        if (foodAppear === snakePosition[0] ) {        
          console.log(`eat food score is ${score}`)
          removeFood(foodAppear) 
          randomFoodPosition()
          addFood(foodAppear)
          
        // } if (snakePosition[0].classList('snake')) {
        //   // resetGame()
      
        //   console.log('error')
        }
        break 
      case 40: //arrow down 
        if (verticalPosition < width - 1) snakePosition[0] += width
        console.log('move down')
        if (foodAppear === snakePosition[0] ) {        
          console.log(`eat food score is ${score}`)
          removeFood(foodAppear) 
          randomFoodPosition()
          addFood(foodAppear)
          
        }  
        break 
      default: 
        console.log('INVALID KEY')
    }
    addSnake(snakePosition[0])
  }
  function addToScore() {
    score = score
  }
  addToScore()
  // function moveOne() {
  //   const horizontalPosition = snakePosition % width

  //   if (horizontalPosition < width - 1) snakePosition++
  //   lastKeyPressed = 'right'
  // }
  function snakeGrow() {
  //every second snake moves one position in the direction of the last key press 
  // once function called - GO 
  // first move on 
    
    //if snake hits wall = (grid - 1)?? --> end game 
    //if snake position = snake position --> end game
    //if snake position = foodAppear --> eatFood() --> snake = snake +1 

  }

  //* timer to move snake 
  // function startGame() {
  //   let count = 0

  //   timer = setInterval(() => {
  //     count++
  //     console.log()
  //     removeSnake(snakePosition)
  //     moveSnake(direction)
  //     addSnake(snakePosition)
      
      
  //   },1000);
  // }
  
  // startGame()

  function snakeEat() { 
    if (foodAppear === snakePosition[0]) {
      console.log('eat food')
      removeFood(foodAppear)
      randomFoodPosition()
      addFood(foodAppear)
      snakeTail(snakePosition)
      // snake.push()
      
    } return score + 5

  }
  snakeEat()

  // function gameOver() {
  // // if snake hits the wall or itself - GAME OVER 
  // // true or false keep playing/game over 

  // }
  //* Food 
  //Add the food  //Remove the food

  function addFood(position) {
    cells[position].classList.add(foodClass)
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
    // foodAppear = randomCell
    // })
    // else 
  }
  
  //* sounds 
  // console.log(playSounds)
  // function snakeSounds(){ 

  // }
  function resetGame() {
    snakePosition = [209]
    randomFoodPosition()
    
  }
  resetGame()

  //* Event Listeners 
  document.addEventListener('keyup', moveSnake)
  createSnakeGrid(snakePosition)
}
window.addEventListener('DOMContentLoaded', init)