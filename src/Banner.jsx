import React, { useEffect, useState } from 'react'

const styles = {
    container: `w-full bg-red-400 m-auto rounded-md shadow-xl p-6 my-8`,
    date: `font-bold text-white text-2xl text-center`
}

const Banner = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
          }, 1000);
      
          return () => clearInterval(interval);
    }, [])
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
  return (
    <div className={styles.container}>
      <h1 className={styles.date}>{dayOfWeek}, {day}/{month}/{year}</h1>
    </div>
  )
}

export default Banner