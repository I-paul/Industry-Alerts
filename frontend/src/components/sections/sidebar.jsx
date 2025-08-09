import { motion } from "framer-motion";
import Button from "../UI/button";

const Sidebar = ({ setDept, dept }) => {
    const Options = ["All News", "Incentives & Regulations", "Electric Vehicles", "Connected Vehicles", "Autonomous Vehicles",
        "Shared Mobility", "Aftermarket & Digital Retail", "Leasing & Rental", "Two Wheelers", "Trucks",
        "Buses & Coaches", "Off-Highways"];
    return (
        <motion.section className="hidden md:flex flex-col sticky h-[90vh] w-[30vw] top-20 right-0 bg-[var(--brand-primary)] border-r-4 border-b-4 border-[var(--brand-secondary)] p-10 gap-1 rounded-br-4xl 
                                    justify-around text-sm lg:text-[16px] "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {Options.map((item, idx) =>
                <Button variant={item == dept ? "secondary" : "outline"} key={item + idx} onClick={() => setDept(item)}>{item}</Button>
            )}
        </motion.section>
    )
}

export default Sidebar;