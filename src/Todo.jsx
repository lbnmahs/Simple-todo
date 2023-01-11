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
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? styles.liCompleted :styles.li}>
        <div className={styles.row}>
            <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? 'checked' : ''} />
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? styles.textCompleted :styles.text}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={styles.button}><FaRegTrashAlt size={20}/></button>
    </li>
  )
}

export default Todo