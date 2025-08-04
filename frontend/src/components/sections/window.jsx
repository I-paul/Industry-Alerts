import { useState } from "react";
import MonthYearPicker from "../UI/picker";
import Card from "../UI/card";
import Link from "../UI/link";
import Button from "../UI/button";

const Window = ({ currDept }) => {
  const topNews = {
    dept: "Electric Vehicles",
    title: "Self-Driving Cars to Hit UK Roads by 2026; New Legislation Passed",
    link: "www.google.com",
    image: "https://placehold.co/250x150"
  };

  const monthsAll = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const defaultMonth = new Date().getMonth();
  const defaultYear = new Date().getFullYear();
  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = useState({month:monthsAll[defaultMonth],year:defaultYear});

  return (
    <section className="w-full md:w-[70vw] min-h-[100vh] bg-[var(--bg-dark)] left-0">

      <div className="ml-10 mt-8 flex flex-row relative w-[90vw] md:w-[60vw] items-center justify-between">
        <h1 className="text-white text-lg md:text-2xl font-bold">{currDept}</h1>
        <div className="flex flex-col gap-4 max-w-50 max-h-30 overflow-hidden p-2.5">
            <Button variant="secondary" onClick={()=>setShowPicker(true)}>{selected.month}  {selected.year}</Button>
            {showPicker &&
            ( <MonthYearPicker
              months={monthsAll}
              onSelect={(val) => setSelected(val)}
              onClose={() => setShowPicker(false)}
              minYear={2024}
            />)}
        </div>
      </div>

      <div className="mt-4 ml-4 flex flex-col gap-6">
        {Array(10).fill(topNews).map((item, idx) => (
          <Card variant="primary" key={item.title + idx}>
            <img src={item.image} alt={item.title} className="max-w-[25vw] max-h-[25vh]" />
            <a href={item.link} className="m-3 p-2 text-sm md:text-lg">{item.title}</a>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Window;
