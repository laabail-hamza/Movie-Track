import { useState } from 'react'
import Navbarr from './components/NavBarr'
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarr/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

