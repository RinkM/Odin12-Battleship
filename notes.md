you get an attack move and a defence move.

possible attacks
submarine fires a torpedo in a straight line 3 boxes or so.  hits first target. nothing behind.
recon an area.  no attacks fired, only reveal the map.  


possible defense
block vision / radar jam an area.  




build objects of the ships.   their health, size, name, with functions for taking away health and 0 health    


board is a grid with x and y coordinates

place a ship : 
mouse hover to indicate location. div changes color.  other divs change in row / column to show the shadow of teh ship.
can only move the distance allowed.  mouse moves, but shadow stays when it hits the edges... box 60 - 69 and boxes 06, 16, 26, etc. 
change vertical and horizontal with a key stroke?  r to rotate? create a tool tip.

on mouse over event... also select the next boxes. 
how ? 
horizontal - id + 10 repeated four times. 
vertical id + 1 repeated 4 times. 
add hover css?



click and place a ship.  ship gets the coordinates of each spot it holds. 

next ship is different color?  same thing, gets placed 

have computer place ships.  random vertical or horizontal alignment. random x and y coordinates.  

fire the weapon:
mouse hover over squares.  changes color of square.  on click, square changes to indicate a hit or miss.

computer fires.
computer chooses a square at random.  if hit, will need to math it's way into  a cross pattern.  then a straight line pattern.   then random pattern 

game over screen?

place your lifeboat.  lifeboat needs to reach the edge of the map.  ??? silly idea. war crimes.  either the winner or loser go save the survivors....?




battleship - 4
submarine - 3
cruiser -3
destroyer - 2
carrier - 5




Begin your app by creating the Ship factory function.

Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.
REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.
Ships should have a hit() function that increases the number of ‘hits’ in your ship.
isSunk() should be a function that calculates it based on their length and the number of ‘hits’.


<!-- how to make as a factory?   -->
 different class and size dependant.
use a reference table....only created when placed in the water? that sort of thing?   maybe not.

build a player inventory / navy.

<!-- how to build tests for this? -->


when a player makes a new game... they get ships.  

ships are made by... iterating through the shiptypes list.  Each ship type gets added to player "inventory" when it is placed on the board.  By placing it, you also add the x/y coordinates to the ship object.  
iterate does the following:
 - makes ship available to place. puts it in the players' 'hand' so to speak. 
shipTypes.forEach(ship => createShip(ship))  

 - it moves around the game board, showing the shadow it would produce.  
 - on click / placement, the ship object is added to player inventory by using the factory.  
 - on click the ship is placed on the grid and the grid changes color. 
 - each div gets a class name "carrier" for example. this changes the color.   
 - if the div class is 'carrier' do I need the coordinates?   process the hit by looking at the div classes.  



receive attack = when human clicks on square, when computer randomly chooses x/y coordings, verify if legal move,(spot already struck? ) log it,  then parse out what happens. does PC have ship at this location? yes-> hit, display hit.  no? miss action.  move to next player's turn. 





Create Gameboard factory.
Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.



Create Player.
Players can take turns playing the game by attacking the enemy Gameboard.
The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).



Create the main game loop and a module for DOM interaction.
At this point it is appropriate to begin crafting your User Interface.
The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
We’ll leave the HTML implementation up to you for now, but you should display both the player’s boards and render them using information from the Gameboard class.
You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.
Finish it up
There are several options available for letting users place their ships. You can let them type coordinates for each ship, or investigate implementing drag and drop.
You can polish the intelligence of the computer player by having it try adjacent slots after getting a ‘hit’.
Optionally, create a 2 player option that lets users take turns by passing the device back and forth. If you’re going to go this route, make sure the game is playable on a mobile screen and implement a ‘pass device’ screen so that players don’t see each others boards!










function randomCoordinate(){
  <!-- pass gridsize and change the 10 number later.  also, this range is 0-9. -->
  let num = Math.floor(Math.random()*10);
  return num
}

function createCoordinates(){
  let coordinates = {
    x : randomCoordinate(),
    y : randomCoordinate()
    }
    <!-- test the coordinates for availability -->
    return coordinates
}

let shipTypes = [
  {class; "Carrier",
  size: 5},
  {class; "Battleship",
  size: 4},
  {class; "Destroyer",
  size: 3},
  {class; "Submarine",
  size: 3},
  {class; "Patrol Boat",
  size: 2}
  ]


function createShip (ship){
  let aShip = {
  class: ship.class,
  size: ship.size,
  damage: 0,
  sunk: false,
  coordinates: {
    <!-- this is just a place holder. gets the idea -->
    x:4,
    y:4}
  vertical: false,
  hit: function (){this.damage++
    if (this.damage == this.size) {isSunk()}
    },
  whenSunk: function (){console.log(`You sunk my ${this.class}!`)}
  return aShip
}

}


let gameboard = {
  receiveAttack: function(){},
  playerALog:[],
  playerBlog:[],
  playerTurn : true; 
  changeTurns: function (){ this.playerTurn = !this.playerTurn}

}