import React, { useState } from 'react'

const DynamicTable = () => {
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  const [currentRow, setCurrentRow] = useState(0)
  const [curentColumn, setCurrentColumn] = useState(0)

  const handleRowsNumberChange = (e) => {
    let rowsArray = new Array(+e.target.value).fill(1)
    // console.log(rowsArray)
    setRows(rowsArray)
  }
  const handleColumnsNumberChange = (e) => {
    let columnsArray = new Array(+e.target.value).fill(2)
    setColumns(columnsArray)
  }

  return (
    <div className="container">
      <div className="input-fields">
        <label>Rows</label>
        <input
          value={rows.length ? rows.length : ''}
          className="input-box"
          onChange={handleRowsNumberChange}
        />

        <label>Columns</label>
        <input
          value={columns.length ? columns.length : ''}
          className="input-box"
          onChange={handleColumnsNumberChange}
        />
      </div>

      <table>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, ind) => (
                <td
                  className={
                    index === currentRow && ind === curentColumn
                      ? 'activeCell'
                      : 'tableCell'
                  }
                  key={ind}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable
