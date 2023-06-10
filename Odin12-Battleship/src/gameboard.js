
// every tile is an object.  objects are stored in oceanlibrary? 
// this library always accessible. how have I done that in the past? local storage?....
// object includes: div, x,y, function hit, miss, fog of war,  add every div 
// this allows search for objects with specific x, y. return the div.
// add to x coord to highligh other divs.   add to y to highlight others.
// 
// game board is made. every tile is an object with information. searchable.
// 
// to place ships... need to 
// 
// 
// 
// 
// 
// 



function gameBoard(){
  let ocean = [];
  buildOcean(ocean)
  console.log(ocean)
  return ocean



function buildOcean (ocean){
  const gridSize = 10
  const gameContainer = document.getElementById("gridSpace")
  const oceanContainer = document.createElement("div")
  oceanContainer.setAttribute("id", "oceanContainer")

  for (let y = 0; y < gridSize; y++){
    const row = createOceanRow(y);
    for (let x = 0; x < gridSize; x++){
    const tileObj = createSingleTile(x,y);
      ocean.push(tileObj);
      row.appendChild(tileObj.div);
    }
    oceanContainer.appendChild(row);
  }
  gameContainer.appendChild(oceanContainer);
}

function createOceanRow (y){
  const row = document.createElement("div") 
  row.classList.add("rowContainer")
  row.setAttribute("id", `row${y}`)
return row
}

function createSingleTile (x,y){
  const tile = document.createElement("div"); 
  tile.classList.add("tile");
  tile.setAttribute("id", `${x}${y}`);
  tile.innerHTML= `${x}${y}`;  
  //! these eventlisteners only to be used during game setup...
  //they should be toggled on and off.  remove event listenerduring other moments.
  tile.addEventListener('mouseleave', removeHighlight)
  tile.addEventListener('mouseover', highlightTiles);
  return createOceanTileObj(tile,x,y)
}

// this object will do more in the future: example-> functions to reveal / hide information.
function createOceanTileObj (tile, x, y){
  const tileObj = {
    "div": tile,
    "x": x,
    "y": y,
    containsShip:false,
  }
  return tileObj

}


function tileSearchDiv(div){
  //filter might work here too.  will bring back all matching X, then can search the y
  const tileObj = ocean.find(element => element.div == div)
  console.log("obj", tileObj)
  return tileObj
}


function tileSearchXY(x,y){
  //filter might work here too.  will bring back all matching X, then can search the y
  const tileObj = ocean.find(element => element.x == x && element.y == y)
  
  return tileObj
}

// mouse over the div.  return the object.
// !vertical means x increase by 1 each turn. y is same as original
//vertical true means y increase by 1 each turn. x is same as original
//search ocean for x+1,+2,+3 ,y return object.
// add highlight class to obj.div
//
//
//
function rotate(vertical){
  if (!vertical){
    vertical = true;
  } else {vertical = false;}
  console.log("vert",vertical)
}

function highlightTiles(event){
  let vertical = false;
  const rotateBtn = document.getElementById("rotate");
  rotateBtn.addEventListener("click", rotate(vertical) )
  
  const tileObj = tileSearchDiv(event.target)
  console.log(tileObj)
    for (let i = 0; i <4; i++){
      let nextTile;
      if (!vertical){
        nextTile = tileSearchXY(tileObj.x+i,tileObj.y)
      } else {
        nextTile = tileSearchXY(tileObj.x,tileObj.y+i)
      }
      addHighlight(nextTile)
    }
  }
}

function addHighlight(tileObj){
  try{
    tileObj.div.classList.add("possibleShip");
  } catch (error) {
    console.error("can't find the divs", error);
    tileObj.div.classList.add("badPlacement");
  }
  
}

function removeHighlight(){
  let highlighted = document.getElementsByClassName("possibleShip");
  [...highlighted].map(item => item.classList.remove("possibleShip"))
}





let gameboard = {
  receiveAttack: function(){},
  playerALog:[],
  playerBlog:[],
  playerTurn : true,
  changeTurns: function (){ this.playerTurn = !this.playerTurn}

}



export default gameBoard