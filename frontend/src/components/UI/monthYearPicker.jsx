import { useState, useMemo } from "react";

export default function MonthPicker({ months, onSelect, onClose, minYear }) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const [year, setYear] = useState(currentYear);
    const [month, setMonth] = useState(currentMonth);

    const years = useMemo(() => {
        const y = [];
        for (let i = minYear; i <= currentYear; i++) y.push(i);
        return y;
    }, [minYear, currentYear]);

    const confirmSelection = () => {
        onSelect({
            date: "all",    
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
                <h2 className="text-lg font-semibold text-center mb-4">Select Month/Year</h2>

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
