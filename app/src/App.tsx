
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"

import {Routes,Route} from 'react-router-dom'


const App:React.FC = () => {

  return(
    <>
     <div>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes>
     </div>
    </>
  )
}
export default App