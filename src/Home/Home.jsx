import Threescene from '../Threescene/Threescene';
import './Home.css';
function Home() {
  return (
    <div className='home-container'>
    <div className='canvas-container'>
      <Threescene />
      </div>
    </div>
  );
}

export default Home;
