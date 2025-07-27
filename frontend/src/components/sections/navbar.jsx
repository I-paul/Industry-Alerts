import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import logo from "../../assets/logo.png";
import Link from "../UI/link";
import Button from "../UI/button";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <motion.nav className="sticky flex flex-row top-0 p-7 bg-[var(--brand-primary)] items-center justify-between z-99">
      <div className="flex">
        <a href="#">
          <img src={logo} alt="Logo" className="w-60" />
        </a>
      </div>
      <div className="hidden gap-10 md:flex">
        <Link variant="Navbar" href="https://www.frost.com/analytics/industry/mobility-automotive-transportation/">Frost</Link>
        <Link variant="Navbar" href="https://store.frost.com/">Store</Link>
        <Link variant="Navbar">Search</Link>
        <Link variant="Navbar">Welcome!</Link>
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
          <Link variant="Navbar">Search</Link>
          <Link variant="Navbar">Welcome!</Link>
          <div className="w-[40vw] h-0 border-white border-2"></div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;