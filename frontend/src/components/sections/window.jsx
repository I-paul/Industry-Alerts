import { useState, useEffect, useMemo } from "react";
import CalendarPicker from "../UI/picker";
import Card from "../UI/card";
import Link from "../UI/link";
import Button from "../UI/button";
import data from "../../data/sample.json"
import handleFetch from "../../utils/fetch";
import PaginationBar from '../UI/pagination'

const Window = ({ currDept, searchKeywords }) => {
	const articlesPerPage = 10;
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setCurrentPage(1)
		window.scrollTo({ top: 0 });
	}, [currDept]);


	const monthsAll = [
		'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December',
	];

	const [showPicker, setShowPicker] = useState(false);
	const [selectedDate, setSelectedDate] = useState({ date: null, month: null, year: null });

	const filteredArticles = useMemo(
		() => handleFetch(data, currDept, searchKeywords, selectedDate),
		[data, currDept, searchKeywords, selectedDate]
	);
	
	const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
	const paginatedArticles = filteredArticles.slice(
		(currentPage - 1) * articlesPerPage,
		currentPage * articlesPerPage
	);

	const showDept = useMemo(() => currDept === 'All News' || currDept === '', [currDept]);
	const searchDesc = currDept === '' ? true : false;

	return (
		<section className="w-full md:w-[60vw] min-h-[100vh] bg-white left-0">

			{currDept && <div className="mx-10 mt-8 flex flex-row relative w-[88vw] md:w-[55vw] items-center justify-between">
				<h1 className="text-[var(--text-primary)] text-lg md:text-2xl font-bold">{currDept}</h1>
				<div className="flex flex-col gap-4 max-w-50 max-h-30 overflow-hidden p-2.5">
					<Button variant="secondary" onClick={() => setShowPicker(true)}>{selectedDate.date == null?"Select Date":selectedDate.date + " " + selectedDate.month + " " + selectedDate.year}</Button>
					{showPicker &&
						(<CalendarPicker
							months={monthsAll}
							onSelect={(val) => setSelectedDate(val)}
							onClose={() => setShowPicker(false)}
							minYear={2024}
						/>)}
				</div>
			</div>}
			{searchDesc && <div className="ml-10 mt-8  flex flex-row relative w-[90vw] md:w-[65vw] items-center justify-between">
				<h1 className="text-white text-[16px] md:text-xl font-bold">{`The search results for "${searchKeywords}" are ${filteredArticles.length} articles`}</h1>
			</div>}

			<div className="mt-4 ml-4 flex flex-col gap-1 sm:gap-4">
				{paginatedArticles.map((item, idx) => (
					<Card variant="primary" key={item.title + idx} href={item.link}>
						<img src={item.img} alt={item.title} className="w-[40vw] max-h-[40vh] sm:max-w-[22vw] sm:max-h-[25vh] " />
						<span className="flex flex-col relative h-[19vh] w-full md:h-[20vh]  justify-center">
							<p className=" ml-3  text-[11px] lg:text-[15px] xl:text-[20px]" >{item.title}</p>
							{showDept && <span className="absolute right-2 bottom-0 text-[10px] md:text-[14px]">{item.dept}</span>}
							<span className="absolute top-0  md:left-2 md:bottom-0 text-[10px] md:text-[14px]">{"Published : " + item.published}</span>
						</span>
					</Card>
				))}
			</div>
			<div className="flex mx-5 my-4 justify-center items-center w-[90vw] md:w-[65vw] overflow-x-hidden">
				<PaginationBar
					totalPages={totalPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</section>
	);
};

export default Window;
