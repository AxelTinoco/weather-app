import { createContext, useState } from "react";

const WeatherUrlContext = createContext();

const WeatherUrlContextProvider = ({children}) => {

    const [weatherUrl, setWeatherUrl] = useState('')

    return (

        <WeatherUrlContext.Provider value={{weatherUrl,setWeatherUrl}}>

            {children}

        </WeatherUrlContext.Provider>

    )

}
export {WeatherUrlContextProvider}
export default WeatherUrlContext