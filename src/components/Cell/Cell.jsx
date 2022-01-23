import React from 'react'

export const Cell = ({cell}) => {
  return (
    <div  
      style={
        {width: 50, height: 50, background: cell === 0 ? 'grey' : 'green'}
      }
    >
      {cell}
    </div>
  )
};
