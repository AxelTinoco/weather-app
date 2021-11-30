
import { createContext} from "react"
import { useForm } from "../hooks/useForm";


const CityContext = createContext()

const CityContextProvider = ({children}) => {
    
    const [cityName, handleInputChange,reset ] = useForm({
        name: ''
    })


    return (
        <CityContext.Provider value={{cityName,handleInputChange,reset}}>
            {children}
        </CityContext.Provider>

    )


}
export {CityContextProvider};
export default CityContext;