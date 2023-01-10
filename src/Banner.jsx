import React, { useEffect, useState } from 'react'

const styles = {
    container: `w-full bg-red-400 m-auto rounded-md shadow-xl p-6 my-8`,
    date: `font-medium text-white text-2xl text-center`,
    quotes: `text-white mt-4`,
    quoteContent: `font-medium text-base text-left`,
    quoteAuthor: `font-light text-sm italic text-left`
}

const Banner = () => {
    const [date, setDate] = useState(new Date())
    const [quote, setQuote] = useState({})
    const [timeOfDay, setTimeOfDay] = useState('')
    const [image, setImage] = useState("");

    // Display day and date
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

    // Display a quote
    useEffect(() => {
        const apiKey = import.meta.env.VITE_QUOTE_API_KEY
        console.log(apiKey)
        const getQuote = async() => {
            const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${apiKey}`,
                    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
                }

            })
            const data = await response.json()
            console.log(data)
            setQuote(data)
        }
        const interval = setInterval(getQuote, 1000 * 60 * 60 * 24)
        getQuote()
        return () => clearInterval(interval)
    }, [])

    // Change bg image according to time of day
  return (
    <div className={styles.container}>
      <h1 className={styles.date}>{dayOfWeek}, {day}/{month}/{year}</h1>
      
      <div className={styles.quotes}>
        <p className={styles.quoteContent}>{quote?.content}</p>
        <p className={styles.quoteAuthor}>~{quote?.originator?.name}</p>
      </div>
        
    </div>
  )
}

export default Banner