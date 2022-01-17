export const Board = () => {
  const rows = 18;
  const table = Array(rows).fill(null).map(() => Array(10).fill(0));

  return (
    <div>
      {table.map(row => 
        <div style={{display: 'flex', gridGap: '1px'}}>
          {row.map(cell => 
            <div style={{width: 50, height: 50, background: 'grey'}}>{cell}</div>
          )}
        </div>
      )}
    </div>
  )
};
