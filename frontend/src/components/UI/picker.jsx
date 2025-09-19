import { useState, useMemo } from "react";

export default function CalendarPicker({ months, onSelect, onClose, minYear }) {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth();
	const currentDateNum = now.getDate();

	const [year, setYear] = useState(currentYear);
	const [month, setMonth] = useState(currentMonth);
	const [selectedDay, setSelectedDay] = useState(currentDateNum);

	const years = useMemo(() => {
		const y = [];
		for (let i = minYear; i <= currentYear; i++) y.push(i);
		return y;
	}, [minYear, currentYear]);

	const daysInMonth = useMemo(() => {
		return new Date(year, month + 1, 0).getDate();
	}, [year, month]);

	const startDay = useMemo(() => {
		return new Date(year, month, 1).getDay();
	}, [year, month]);

	const daysArray = useMemo(() => {
		const blankDays = Array(startDay).fill(null);
		const validDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
		return [...blankDays, ...validDays];
	}, [startDay, daysInMonth]);

	const handleClick = (day) => {
		const selected = new Date(year, month, day);
		if (selected > now) return;
		setSelectedDay(day);
	};

	const confirmSelection = () => {
		if (!selectedDay) return;
		onSelect({
			date: selectedDay,
			month: months[month],
			year,
		});
		onClose();
	};
	const handleClear = () => {
		onSelect({ date: null, month: null, year: null });
		onClose();
	};
	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg w-80">
				<h2 className="text-lg font-semibold text-center mb-4">Select Date</h2>

				<div className="flex gap-2 mb-4">
					{/* Month Selector */}
					<select
						value={month}
						onChange={(e) => {
							const newMonth = Number(e.target.value);
							setMonth(newMonth);
							if (year === currentYear && newMonth > currentMonth) {
								setMonth(currentMonth);
							}
						}}
						className="flex-1 border p-2 rounded"
					>
						{months.map((m, idx) =>
							year === currentYear && idx > currentMonth ? null : (
								<option key={m} value={idx}>{m}</option>
							)
						)}
					</select>

					{/* Year Selector */}
					<select
						value={year}
						onChange={(e) => {
							const y = Number(e.target.value);
							setYear(y);
							if (y === currentYear && month > currentMonth) {
								setMonth(currentMonth);
							}
						}}
						className="flex-1 border p-2 rounded"
					>
						{years.map((y) => <option key={y} value={y}>{y}</option>)}
					</select>
				</div>

				{/* Calendar Days Grid */}
				<div className="grid grid-cols-7 gap-1 text-sm text-center mb-4">
					{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
						<div key={d} className="font-semibold">{d}</div>
					))}
					{daysArray.map((day, idx) => {
						const isFuture =
							day &&
							(year === currentYear && month === currentMonth && day > currentDateNum);

						return (
							<button
								key={idx}
								disabled={isFuture || !day}
								onClick={() => handleClick(day)}
								className={`p-1 rounded-full h-8 w-8 mx-auto ${selectedDay === day ? "bg-blue-500 text-white" : `${isFuture ? "text-[var(--text-muted)] cursor-not-allowed" : ` ${!day ? "cursor-default" : "hover:bg-gray-400"}`}`
									} `}
							>
								{day || ""}
							</button>
						);
					})}
				</div>

				{/* Action Buttons */}
				<div className="flex justify-around items-center gap-2">
					<button
						onClick={handleClear}
						className="text-sm text-white px-3 py-1 bg-[var(--footer-bg)] hover:bg-[var(--error)] rounded"
					>
						Clear
					</button>
					<button onClick={onClose} className="text-sm text-gray-600 px-3 py-1 hover:underline">Cancel</button>
					<button
						onClick={confirmSelection}
						className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
					>
						Select
					</button>
				</div>
			</div>
		</div>
	);
}
