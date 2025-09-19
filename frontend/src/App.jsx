import './App.css';
import { useState } from 'react';
import Navbar from './components/sections/navbar';
import Sidebar from './components/sections/sidebar';
import Window from './components/sections/window';
import Hero from './components/sections/hero';
import Footer from './components/sections/footer';
import { motion } from 'framer-motion';
import Card from './components/UI/card';

const App = () => {
	const [selected, setSelected] = useState('Top News');
	const [keywords, setKeywords] = useState()
	
	return (
		<>
			<Navbar setDept={setSelected} dept={selected} changeArticles={setKeywords} />
			<div className="flex flex-col">
				<Hero />
				<div className="flex flex-row ">
					<Sidebar setDept={setSelected} dept={selected} />
					<Window currDept={selected} searchKeywords={keywords} />
					<motion.div className="hidden md:flex flex-col sticky h-[90vh] w-[20vw] top-20 left-0 bg-blue-700 border-l-4 border-[var(--info)]"
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						<Card variant="primary" className="m-4 p-4 flex flex-col items-start">
							<img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=400&h=200&fit=crop" alt="Placeholder" />
							<p className=" ml-3  text-[11px] lg:text-[14px] xl:text-[18px]" >70 Years of the Fiat 600: the iconic car takes the spotlight at 1000 Miglia with the support of FIAT and Abarth Brands</p>
						</Card>	
					</motion.div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App;