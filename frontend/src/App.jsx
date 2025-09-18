import './App.css';
import { useState } from 'react';
import Navbar from './components/sections/navbar';
import Sidebar from './components/sections/sidebar';
import Window from './components/sections/window';
import Hero from './components/sections/hero';
import Footer from './components/sections/footer';

const App = () => {
	const [selected, setSelected] = useState('All News');
	const [keywords, setKeywords] = useState()
	
	return (
		<>
			<Navbar setDept={setSelected} dept={selected} changeArticles={setKeywords} />
			<div className="flex flex-col">
				<Hero />
				<div className="flex flex-row ">
					<Sidebar setDept={setSelected} dept={selected} />
					<Window currDept={selected} searchKeywords={keywords} />
					<div className="flex w-[20vw] h-[100vh] top-20 left-0 bg-gray-600 sticky"></div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App;