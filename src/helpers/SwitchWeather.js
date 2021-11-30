// import { useContext, useEffect, useState } from "react"
// import WeatherUrlContext from "../context/WeatherUrlContext"
// import { WeatherOptions } from "./WeatherOptions"



// export const SwitchWeather = (info) => {
    
//     const {weatherUrl,setWeatherUrl} = useContext(WeatherUrlContext)
//     const [state, setState] = useState('') // Guardar url del estado de el clima 
//     const [loading, setLoading] = useState(false)   

//     const hanldeChangeWeather = (info) => {

//         switch (info) {
//             case 'Clear':
//                 return setState(WeatherOptions.Clear.url)
//             case 'Clouds':
//                 return setState(WeatherOptions.Clouds.url)
//             case 'Rain':
//                 return setState(WeatherOptions.Rain.url)
//             case 'Snow':
//                 return setState(WeatherOptions.Snow.url)

//             default:
//                 return state;
//         }

//     }

    
//         useEffect(() => {
        
//             setTimeout(() => {
//                 hanldeChangeWeather(data.weather[0].main)
//                 setLoading(true)
//             }, 1500); 
//             return () => {
     
//                  hanldeChangeWeather('')
               
//                  setLoading(false)
//             }
             
//             //eslint-disable-next-line 
//          }, [data.weather])


//          return loading
// }
