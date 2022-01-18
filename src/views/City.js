import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {FaTemperatureHigh , FaTemperatureLow} from 'react-icons/fa'
import {WiHumidity,WiStrongWind} from 'react-icons/wi'
import { createClient } from 'pexels';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";
// import Error from "./Error";


const City = () => {
    const {name} = useParams()
    const apikey = '266dd3fdce6427f9bfa7798695c61c85' 
    const [data, setData] = useState([])
     const [photo, setPhoto] = useState([])
    const [loading, setLoading] = useState(false)

   


    const client = createClient('563492ad6f917000010000014b6a053de80f4c349cb551a004f1898e');
    const query = name;

    useEffect(() => {
       try {
        client.photos.search({ query, per_page: 1 }).then(photos => { setPhoto(photos) });
       } catch (error) {
           console.log(error)
       }
       
    }, [name,query, client.photos]);


    console.log(photo)

    useEffect(() => {
        const handleGetData = async () => {
         setTimeout(async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`)
                const result = await response.json();
                setData(result)
                setLoading(true)
            } catch (error) {
                console.log(error)
            } 
         }, 1500);
        }
      handleGetData()
    }, [name])




    return (

        <div className='flex h-screen w-full relative flex-col'>
        {loading ? 
        
        <>
            <div className='flex z-20 p-4 backdrop-filter backdrop-blur md:backdrop-blur-lg rounded-3xl md:w-1/2 mb-4 space-y-3 w-3/4'>
            <h2 className='text-6xl'>{name}</h2>
            </div>
           <div className='text-2xl p-4 w-full sm:w-2/4 space-y-4 flex z-20 flex-col rounded-3xl backdrop-filter backdrop-blur md:backdrop-blur-lg'>
           <p>Humidity :{data?.main?.humidity} <WiHumidity className='inline-flex mx-2'/></p>
            <p className='inline-block'>Temperature Min.: {data?.main?.temp_min}<FaTemperatureLow className='inline-flex mx-2'/></p>
            <p>Temperature :{data?.main?.temp}</p>
            <p>Temperature Max.: {data?.main?.temp_max} <FaTemperatureHigh className='inline-flex mx-2'/> </p>
           <p>Weather : {data?.weather[0]?.description}</p>
           <p>Wind : {data?.wind?.speed} <WiStrongWind className='inline-flex mx-2'/></p>

           <Link to="/">
           <button 
           className='p-4 w-1/2 bg-gradient-to-tr from-blue-600 to-green-300 rounded-3xl'
           >Regresar
           </button>
           </Link>
           
           </div>

           <div className='absolute top-0 w-full h-screen z-0 flex'>
            <img className='object-cover w-full h-full flex' 
            src={photo?.photos[0]?.src?.portrait} alt="country" /> 

            </div>
        </>

        :

        <Player
        style={{ width: '100%' ,height : '100%' }}
        autoplay
        loop
        speed='1'
        mode="normal"
        src={'https://assets2.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json'}

    >

    </Player>
   


        }
        </div>
    )
}

export default City
