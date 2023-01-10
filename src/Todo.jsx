import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const styles = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize rounded-md`,
    liCompleted: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded-md`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textCompleted: `cursor-poniter line-through ml-2`,
    button: `cursor-pointer flex items-center`
}
const Todo = ({ todo }) => {
  return (
    <li className={styles.li}>
        <div className={styles.row}>
            <input type="checkbox" />
            <span className={styles.text}>{todo}</span>
        </div>
        <button className={styles.button}><FaRegTrashAlt size={20}/></button>
    </li>
  )
}

export default Todo