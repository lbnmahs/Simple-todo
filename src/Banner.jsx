import React, { useEffect, useState } from 'react'
import afternoon from './assets/afternoon.jpg'
import morning from './assets/morning.jpg'
import night from './assets/night.jpg'
import evening from './assets/evening.jpg'

const styles = {
    container: `max-w-4xl bg-red-400 m-auto rounded-md shadow-xl p-12 my-8 bg-cover bg-center `,
    bg: `bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 bg-black rounded-md p-6`,
    date: `font-medium text-white text-2xl text-center`,
    quotes: `text-white mt-4`,
    quoteContent: `font-medium text-xl text-left`,
    quoteAuthor: `font-light text-base italic text-left`
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
        const getQuote = async() => {
            const url = 'https://quotes15.p.rapidapi.com/quotes/random/'
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${apiKey}`,
                    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
                }

            })
            const data = await response.json()
            if(data?.originator?.name){
                setQuote(data)
                // setTimeout(getQuote, 1000 * 60 * 60 * 24)
            }else{
                getQuote()
            }
        }
        getQuote()
        // const interval = setInterval(getQuote, 1000 * 60 * 60 * 24)
        // getQuote()
        // return () => clearInterval(interval)
    }, [])

    // Change bg image according to time of day
    useEffect(() => {
        const currentTime = date.getHours();
        if(currentTime < 12){
            setTimeOfDay('morning')
            setImage(morning)
        }else if(currentTime < 17){
            setTimeOfDay('afternoon')
            setImage(afternoon)
        }else if(currentTime < 21){
            setTimeOfDay('evening')
            setImage(evening)
        }else{
            setTimeOfDay('night')
            setImage(night)
        }
    }, [])
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className={styles.bg}>
            <h1 className={styles.date}>Good {timeOfDay}!, {dayOfWeek}, {day}/{month}/{year}</h1>
            <div className={styles.quotes}>
                <p className={styles.quoteContent}>{quote?.content}</p>
                {
                    quote?.originator?.name && <p className={styles.quoteAuthor}>- {quote?.originator?.name}</p>
                }
            </div>
        </div>
      
        
    </div>
  )
}

export default Banner