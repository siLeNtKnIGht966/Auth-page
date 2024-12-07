import { Register } from "./components/auth/Register"
import {Routes,Route} from 'react-router-dom'
import './index.css'
function App() {

  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
