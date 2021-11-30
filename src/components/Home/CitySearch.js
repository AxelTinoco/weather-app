import { useContext, useState } from 'react'
import {GoSearch} from 'react-icons/go'
import CityContext from '../../context/CityContext'
import CityResumeData from '../CityResumeData'
import toast, { Toaster } from 'react-hot-toast';



const CitySearch = () => {
    
    const apikey = '266dd3fdce6427f9bfa7798695c61c85' 
    const {cityName,handleInputChange,reset} = useContext(CityContext)
    const {name} = cityName
    
    const [cityResumeInfo, setCityResumeInfo] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}&units=metric`)
            const result = await response.json();
            setCityResumeInfo(result)
            console.log(cityResumeInfo.cod)
            if (cityResumeInfo.cod === 404) {
                toast.error('Ciudad no encontrada!');
               
            }
    
        } catch (error) {
            alert(error)
        }

        reset()
       
    }

   

    return (
        <div className='self-center md:w-full w-5/6 relative flex flex-col'>
            <Toaster/>
             <form 
        onSubmit={handleSubmit}
        className='h-1/6 z-20 self-center
         rounded-3xl shadow-2xl p-4 flex flex-col content-center space-y-2 backdrop-filter backdrop-blur-xl md:w-1/2'>

            <h2 className='text-white text-2xl text-center'>Buscar ciudad</h2>

           <div className='flex w-full bg-white flex-row-reverse items-center rounded-3xl p-1'>
            <input 
            type="text" 
            name='name'
            value={name}
            className='w-full rounded-3xl h-8 relative focus:outline-none pl-2'
            onChange={handleInputChange}
            autoComplete='off'
            />
            <GoSearch className='h-6 w-6 text-blue-600 flex pl-1 '/>
           </div>
        </form>



  
            {
               cityResumeInfo && cityResumeInfo.cod === 200
               ? 
                <CityResumeData data = {cityResumeInfo} />
              :null
            }
    
        </div>

       
    )
}

export default CitySearch
