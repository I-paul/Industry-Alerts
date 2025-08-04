import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/sections/navbar';
import Sidebar from './components/sections/sidebar';
import Window from './components/sections/window';
import Hero from './components/sections/hero';
import Footer from './components/sections/footer';

const App= () => {
  const [selected,setSelected]= useState('Top News');


  return(
    <>
    <Navbar setDept={setSelected} dept={selected} />
    <div className="flex flex-row">
      <Sidebar setDept={setSelected} dept={selected}/>
      <div className="block">
        <Hero/>
        <Window currDept={selected}/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App;