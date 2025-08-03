import { useState } from 'react';
import Button from './button';

export default function MonthYearPicker({months, onSelect, onClose, minYear = 2024}) {

  const maxYear = new Date().getFullYear()
  const maxMonth =new Date().getMonth()
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [selectedMonth, setSelectedMonth] = useState(maxMonth);
  const handleSubmit = () => {
    onSelect({ year: selectedYear, month: months[selectedMonth] });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-72 space-y-4">
        <h2 className="text-lg font-semibold text-center">Select Month & Year</h2>

        <div className="flex gap-4 justify-between">
          <select
            className="w-1/2 border rounded-md p-2"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
          >
            {(months.slice(0,maxMonth+1)).map((month, idx) => (
              <option key={month} value={idx}>{month}</option>
            ))}
          </select>

          <select
            className="w-1/2 border rounded-md p-2"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {Array.from({ length: maxYear - minYear+ 1 }, (_, i) => minYear + i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <Button
            variant='primary'
            onClick={handleSubmit}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}
