
import Signup from "./components/SignUp/Signup"
import Sigin from "./components/Signin/sign"
import Dashbord from "./components/Dashboard/Dashbord"
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
 
    <Routes>
    <Route path="/" element={<Signup/>}/> 
    <Route path="/login" element={<Sigin/>}/> 
    <Route path="/Dashbord" element={<Dashbord/>}/> 
    </Routes>
  )

}

export default App;
