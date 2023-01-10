import React, { useEffect, useState } from 'react'

const styles = {
    bg: `max-w-lg bg-blue-300 rounded-xl shadow-md h-20 m-auto p-4`,
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
    <div className={styles.bg}>
      <h1 className={styles.date}>{dayOfWeek}, {month}/{day}/{year}</h1>
    </div>
  )
}

export default Banner