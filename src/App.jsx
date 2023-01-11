import { useState } from "react";
import Banner from "./Banner"
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from "./Todo";


const styles = {
  bg: `w-full h-screen p-5 bg-slate-800`,
  container: `max-w-[800px] w-full m-auto p-4`,
  form: `flex justify-between mb-8`,
  input: `border p-2 w-full rounded-md text-xl outline-none`,
  button: `p-4 ml-2 bg-purple-500 rounded-md text-slate-100`,
}


function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3'])
  return (
    <div className={styles.bg}>
      <Banner />
      <div className={styles.container}>
        
        <form className={styles.form}>
          <input className={styles.input} placeholder="Add a new Todo"  />
          <button className={styles.button} type="submit"><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {
            todos.map((todo, index) => (
              <Todo todo={todo} key={index} />
            ))
          }
          
        </ul>
      </div>
    </div>
  )
}

export default App
