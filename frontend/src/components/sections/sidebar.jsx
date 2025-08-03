import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../UI/button";

const Sidebar =({setDept , dept})=>{
    const Options = ["Top News","Incentives & Regulations","Electric Vehicles","Connected Vehicles","Autonomous Vehicles",
                        "Shared Mobility","Aftermarket & Digital Retail","Leasing & Rental","Two Wheelers","Trucks",
                        "Buses & Coaches","Off-Highways"];
    return(
        <motion.section className="hidden md:flex flex-col h-[100vh] w-[30vw] right-0 bg-[var(--bg-tertiary)] border-l-4 border-[var(--brand-secondary)] p-10 gap-2 rounded-bl-4xl 
                                    justify-around" >
            {Options.map((item, idx)=>
                <Button variant={item==dept? "secondary" :"outline"} key={item+idx} onClick={()=> setDept(item)}>{item}</Button>
            )}
        </motion.section>
    )
}

export default Sidebar;