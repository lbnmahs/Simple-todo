import { useState, useEffect } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { db } from "./firebase";
import { addDoc, collection, query, onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore";
import Todo from "./Todo";
import Banner from "./Banner"

const styles = {
  bg: `w-full h-screen p-5 bg-slate-800`,
  container: `max-w-[800px] w-full m-auto p-4`,
  form: `flex justify-between mb-8`,
  input: `border p-2 w-full rounded-md text-xl outline-none`,
  button: `p-4 ml-2 bg-purple-500 rounded-md text-slate-100`,
}


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Create a todo and push it to firebase
  const createTodo = async(e) => {
    e.preventDefault(e)
    if(input === ''){
      alert('Please enter a todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setInput('')
  }

  // Read all todos in the firebase firestore
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArray = []
      querySnapshot.forEach((doc) => {
        todoArray.push({...doc.data(), id: doc.id})
      })
      setTodos(todoArray)
    })
    return () => unsubscribe
  }, [])

  // Update a todo in firebase
  const toggleComplete = async(todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // Delete a todo in firebase
  const deleteTodo = async(id) => {
    await deleteDoc(doc(db, 'todos', id))
  }
  return (
    <div className={styles.bg}>
      {/* <Banner /> */}
      <div className={styles.container}>
        
        <form onSubmit={createTodo} className={styles.form}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className={styles.input} 
            placeholder="Add a new Todo"  
          />
          <button className={styles.button} type="submit"><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {
            todos.map((todo, index) => (
              <Todo 
                todo={todo} 
                key={index} 
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
              />
            ))
          }
          
        </ul>
      </div>
    </div>
  )
}

export default App
