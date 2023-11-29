import './App.css'
import Navbar from './Navbar/Navbar'
import Threescene from './Threescene/Threescene'
import Home from './HomePage/Home'

function App() {

  return (
    <>
    <div className="canvas-container">
      <Threescene/>
    </div>
    <Navbar/>
    <div className="container-page">
      <Home/>
    </div>
    </>
  )
}

export default App
