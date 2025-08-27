import LandingPage from "./pages/landing.jsx";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  
  return (
    <>
      <Router>



        <Routes>
          

          {/* <Route path ='/home' element/> */}

          <Route path='/' element={<LandingPage/>} /> 

     </Routes>

      </Router>
    </>
  )
}

export default App;
