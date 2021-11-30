import React, { useEffect, useState } from 'react'
import { WeatherOptions } from '../helpers/WeatherOptions';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';



const CityResumeData = ({data}) => {

 
    const [state, setState] = useState('') // Guardar url del estado de el clima 
    const [loading, setLoading] = useState(false)
      
    const hanldeChangeWeather = (info) => {

        switch (info) {
            case 'Clear':
                return setState(WeatherOptions.Clear.url)
            case 'Clouds':
                return setState(WeatherOptions.Clouds.url)
            case 'Rain':
                return setState(WeatherOptions.Rain.url)
            case 'Snow':
                return setState(WeatherOptions.Snow.url)

            default:
                return state;
        }

    }

    

    useEffect(() => {
        
       setTimeout(() => {
           hanldeChangeWeather(data.weather[0].main)
           setLoading(true)
       }, 1500); 
       return () => {

            hanldeChangeWeather('')
          
            setLoading(false)
       }
        
       //eslint-disable-next-line 
    }, [data.weather])



    console.log('me renderice desdee city resume')

    return (
        <div className='text-white self-center text-center
        rounded-3xl shadow-2xl p-4 flex flex-col content-center space-y-2 backdrop-filter backdrop-blur-xl w-full h-full md:w-1/3 md:h-1/3 my-4'>
           {
               loading ? <div className='flex flex-col justify-center'>

                <h2 className='text-xl'>City/Country : {data.name}</h2>
               <p className='text-lg'>Weather : {data.weather[0].main}</p>
               <p>{data.main.temp} °C</p>
               <Player
                    style={{ width: '60%' ,height : '60%' ,display:'flex'}}
                    autoplay
                    loop
                    speed='1'
                    mode="normal"
                    src={state}
   
                >
   
                </Player>

                <button className='p-4 w-56 bg-blue-400 rounded-3xl opacity-70 hover:opacity-100 self-center'>
                <nav>
                    <Link to={`/${data.name}`}>Ver mas</Link>
                 </nav> 
                </button>

                </div> 
                
                :
                
                <Player
                    style={{ width: '100%' ,height : '100%' }}
                    autoplay
                    loop
                    speed='1'
                    mode="normal"
                    src={'https://assets3.lottiefiles.com/packages/lf20_4kinrn1j.json'}
   
                >
   
                </Player>
               
           }
        </div>
    )
}

export default CityResumeData
