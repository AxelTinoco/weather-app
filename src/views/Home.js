import Navbar from "../components/Navbar"
import sunset from '../assets/sunset.mp4'
import CitySearch from "../components/Home/CitySearch"


const Home = () => {
    return (
        <div className='h-screen flex w-full relative justify-center'>
            <Navbar />
            <video src={sunset} className='absolute h-screen w-screen object-cover' autoPlay muted loop></video>
            <CitySearch />
        </div>
    )
}

export default Home
