import { motion } from "framer-motion";
import Button from "../UI/button";

const Sidebar = ({ setDept, dept }) => {
    const Options = ["Top News","All News", "Incentives & Regulations", "Electric Vehicles", "Connected Vehicles", "Autonomous Vehicles",
        "Shared Mobility", "Aftermarket & Digital_Retail", "Leasing & Rental", "Two Wheelers", "Trucks",
        "Buses & Coaches", "Off-Highways"];
    return (
        <motion.section className="hidden md:flex flex-col sticky h-[90vh] md:w-[25vw] lg:w-[40vw] top-20 right-0 bg-[var(--brand-primary)] border-r-4 border-b-4 border-[var(--brand-secondary)] p-8 gap-1 rounded-br-4xl 
                                    justify-around text-[11px] lg:text-[13px] xl:text-[16px] "
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