

let shipTypes = [
  {class: "Carrier",
  size: 5},
  {class: "Battleship",
  size: 4},
  {class: "Destroyer",
  size: 3},
  {class: "Submarine",
  size: 3},
  {class: "Patrol Boat",
  size: 2}
  ]


function createShip (ship){
  let aShip = {
  class: ship.class,
  size: ship.size,
  damage: 0,
  sunk: false,
  coordinates: {
    // <!-- this is just a place holder. gets the idea -->
    x:4,
    y:4},
  vertical: false,
  hit: function (){this.damage++
    if (this.damage == this.size) {isSunk()}
    },
  whenSunk: function (){console.log(`You sunk my ${this.class}!`)
}}
  return aShip
}






function randomCoordinate(){
  // <!-- pass gridsize and change the 10 number later.  also, this range is 0-9. --
 let num = Math.floor(Math.random()*10);
 return num
}

function createCoordinates(){
 let coordinates = {
   x : randomCoordinate(),
   y : randomCoordinate()
   }
   // <!-- test the coordinates for availability -->
   return coordinates
}