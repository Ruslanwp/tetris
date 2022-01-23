import React from 'react'
import { Cell } from "../Cell";

export const Row = ({row}) => {
  return (
    <div style={{display: 'flex', gridGap: '1px'}}>
      {row.map((cell, i) => (
        <Cell cell={cell} key={i}/>
      ))}
    </div>
  )
};
