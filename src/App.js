
import { Routes, Route } from "react-router-dom";
import { CityContextProvider } from "./context/CityContext";
import Home from "./views/Home";


function App() {
  return (

  <CityContextProvider>

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>


  </CityContextProvider>    

  );
}

export default App;
