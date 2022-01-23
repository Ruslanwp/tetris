import { useEffect, useMemo, useState } from "react";
import Game from "../../Game";
import { Row } from "../Row";

const game = new Game();

window.game = new Game();

game.moveUp();
game.moveUp();
game.moveUp();
game.moveDown();
console.log(game.coords);

export const Board = () => {
  const table = game.board
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  })

  const longBar = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      game.moveDown();
      // setCoords(() => ({...coords, y: coords.y + 1}))

    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [coords]);

  useEffect(() => {
    const blocks = longBar;

    for (let y = 0; y < blocks.length; y++) {
      for (let x = 0; x < blocks[y].length; x++) {
        table[coords.y + y][coords.x + x] = longBar[y][x]
      }
    }
  }, [coords]);

  return (
    <div>
      {table.map((row, i) => 
        <Row row={row} key={i} id={i}/>
      )}
    </div>
  )
};
