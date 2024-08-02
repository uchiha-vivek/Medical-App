
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom'
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import { ToastContainer } from "react-toastify";
import StressQuery from "./Custom-Components/StressQuery";
import Gemini from "./Custom-Components/Gemini";


const App:React.FC = () => {

  return(
    <>
     <div>
      <ToastContainer/>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/stress-query" element={<StressQuery/>}/>
        <Route path="/gemini" element={<Gemini/>}/>
       </Routes>
     </div>
    </>
  )
}
export default App