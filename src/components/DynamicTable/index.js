import React, { useState } from 'react'
import {
  BiDownArrowAlt,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiUpArrowAlt,
} from 'react-icons/bi'

const DynamicTable = () => {
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  const [currentRow, setCurrentRow] = useState(0)
  const [currentColumn, setCurrentColumn] = useState(0)
  let disableArrows = true

  const handleRowsNumberChange = (e) => {
    let rowsArray = new Array(+e.target.value).fill(1)
    resetValues()
    setRows(rowsArray)
  }
  const handleColumnsNumberChange = (e) => {
    let columnsArray = new Array(+e.target.value).fill(2)
    resetValues()
    setColumns(columnsArray)
  }

  const handleRightArrowClick = () => {
    if (currentColumn < columns.length - 1) {
      let increaseCurrentColumn = currentColumn
      increaseCurrentColumn++
      setCurrentColumn(increaseCurrentColumn)
    }
  }
  const HandleLeftArrowClick = () => {
    if (currentColumn > 0) {
      let decreaseCurrentColumn = currentColumn
      decreaseCurrentColumn--
      setCurrentColumn(decreaseCurrentColumn)
    }
  }
  const handleUpArrowClick = () => {
    if (currentRow > 0) {
      let decreaseRowIndex = currentRow
      decreaseRowIndex--
      setCurrentRow(decreaseRowIndex)
    }
  }
  const handleDownArrowClick = () => {
    if (currentRow < rows.length - 1) {
      let increaseRowIndex = currentRow
      increaseRowIndex++
      setCurrentRow(increaseRowIndex)
    }
  }
  const handleKeyBoardNavigation = (e) => {
    switch (e.keyCode) {
      case 37:
        HandleLeftArrowClick()
        break
      case 38:
        handleUpArrowClick()
        break
      case 39:
        handleRightArrowClick()
        break
      case 40:
        handleDownArrowClick()
        break
    }
  }

  const resetValues = () => {
    setCurrentRow(0)
    setCurrentColumn(0)
    disableArrows = true
  }
  if (rows.length > 0 && columns.length > 0) disableArrows = false

  return (
    <div className="container" onKeyUp={handleKeyBoardNavigation}>
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
      <div className="arrows-container">
        <button
          disabled={disableArrows}
          style={{ alignSelf: 'center' }}
          onClick={handleUpArrowClick}
        >
          <BiUpArrowAlt className="arrow" />
        </button>
        <div className="middle-arrows">
          <button disabled={disableArrows} onClick={HandleLeftArrowClick}>
            <BiLeftArrowAlt className="arrow" />
          </button>
          <button disabled={disableArrows} onClick={handleRightArrowClick}>
            <BiRightArrowAlt className="arrow" />
          </button>
        </div>
        <button
          disabled={disableArrows}
          style={{ alignSelf: 'center' }}
          onClick={handleDownArrowClick}
        >
          <BiDownArrowAlt className="arrow" />
        </button>
      </div>

      <table>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, ind) => (
                <td
                  className={
                    index === currentRow && ind === currentColumn
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
