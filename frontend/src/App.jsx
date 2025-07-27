import './App.css';
import Navbar from './components/sections/navbar';
import Sidebar from './components/sections/sidebar';
import Window from './components/sections/window';
import Hero from './components/sections/hero';

const App= () => {
  return(
    <>
    <Navbar/>
    <div className="flex flex-row">
      <div className="block">
        <Hero/>
        <Window/>
      </div>
      <Sidebar/>
    </div>
    </>
  )
}

export default App;