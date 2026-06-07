import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Home from './Pages/Home'
import  About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Counter from './Pages/Counter'
const App = ()=>{
  return(
    <>
    <Navbar/>
    <h1>hello</h1>
    <h1>hello</h1>
    <Parent />
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    <Counter/>
    </>
  )
}

export default App