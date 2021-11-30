
import { Routes, Route } from "react-router-dom";
import { CityContextProvider } from "./context/CityContext";
import { WeatherUrlContextProvider } from "./context/WeatherUrlContext";
import City from "./views/City";
import Home from "./views/Home";


function App() {
    return (

    <CityContextProvider>
      <WeatherUrlContextProvider>

      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/:name' element= {<City />} />
        </Routes>
      </>

        </WeatherUrlContextProvider>


    </CityContextProvider>    

  );
}

export default App;
