import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Home from './Pages/Home'
import  About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import {Routes, Route} from 'react-router-dom'
import Effect from './components/Effect'
import Counter from './Pages/Counter'
const App = ()=>{
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/service' element={<Services/>}/>
     <Route path='/parent' element={<Parent/>}/>
     <Route path='/useState' element={<Counter/>}/>
     <Route path='/useEffect' element={<Effect/>}/>

    </Routes>
    </>
  )
}

export default App