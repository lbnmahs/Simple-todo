import Banner from "./Banner"
const styles = {
  bg: `w-full h-screen bg-slate-100 `
}


function App() {

  return (
    <div className={styles.bg}>
      <Banner />
      <div className={styles.container}>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Add a new Todo"  />
          <button className={styles.button} type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default App
