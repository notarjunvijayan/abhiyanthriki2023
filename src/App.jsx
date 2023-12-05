import './App.css'
import Navbar from './Navbar/Navbar'
import Threescene from './Threescene/Threescene'

function App() {

  return (
    <>
    <div className="canvas-container">
      <Threescene/>
    </div>
    <Navbar/>
    <div className="container-page">
    </div>
    </>
  )
}

export default App
