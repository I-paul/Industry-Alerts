import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import logo from "../../assets/logo.png";
import Link from "../UI/link";
import Button from "../UI/button";
import { SearchIcon } from "lucide-react";
import handleSearch from "../../utils/search";

const Navbar = ({setDept , dept}) => {
  const [hamburger, setHamburger] = useState(false);
  const [searchText,setSearchText] = useState('')

  const Options = ["Top News","Incentives & Regulations","Electric Vehicles","Connected Vehicles","Autonomous Vehicles",
                        "Shared Mobility","Aftermarket & Digital Retail","Leasing & Rental","Two Wheelers","Trucks",
                        "Buses & Coaches","Off-Highways"];

  return (
    <motion.nav className="sticky flex flex-row top-0 p-7 bg-[var(--brand-primary)] items-center justify-between z-99 border-b-4 border-[var(--brand-secondary)]">
      <div className="flex">
        <a href="#">
          <img src={logo} alt="Logo" className="w-60" />
        </a>
      </div>
      <div className="hidden gap-10 md:flex">
        <Link variant="Navbar" href="https://www.frost.com/analytics/industry/mobility-automotive-transportation/">Frost</Link>
        <Link variant="Navbar" href="https://store.frost.com/">Store</Link>
        <div className="flex flex-row">
          <input type="text" placeholder="Text Here" className="bg-gray-200 rounded-l-2xl p-2" onChange={(e)=>setSearchText(e.target.value)}/>
          <Button variant="secondary" onClick={handleSearch}><SearchIcon/></Button>
        </div>
      </div>
      
      <div className="md:hidden z-70" >
        <Button variant="hamburger" onClick={() => setHamburger((prev) => !prev)}>
          <span className="text-2xl">{hamburger ? "✕" : "☰"}</span>
        </Button>
      </div>


      <AnimatePresence>
        {hamburger && (
        <motion.div className="fixed top-20 right-0 h-[100vh] w-[50vw] bg-[var(--brand-primary)] flex flex-col items-center gap-1.5 py-6 md:hidden z-50 " 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3}}
        >
          <Link variant="Navbar" href="https://www.frost.com/analytics/industry/mobility-automotive-transportation/">Frost</Link>
          <Link variant="Navbar" href="https://store.frost.com/">Store</Link>
          <div className="w-[40vw] h-0 border-white border-2"></div>
          <div className="flex flex-col gap-1.5 m-2">
            {Options.map((item, idx)=>
                <Button variant={item==dept? "secondary" :"outline"} key={item+idx} 
                onClick={()=> {
                  setDept(item)
                  setHamburger(false)
                }}>{item}</Button>
            )}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;