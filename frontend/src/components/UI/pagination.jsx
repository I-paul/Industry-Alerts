import { useState } from 'react';
import Button from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationBar = ({ totalPages, currentPage, setCurrentPage }) => {
	const [startIndex, setStartIndex] = useState(0);

	const visiblePages = 8;

	const handlePrevGroup = () => {
		setStartIndex(prev => Math.max(prev - visiblePages, 0));
	};

	const handleNextGroup = () => {
		if (startIndex + visiblePages < totalPages) {
			setStartIndex(prev => prev + visiblePages);
		}
	};

	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
		startIndex,
		startIndex + visiblePages
	);

	return (
		<div className="flex items-center gap-1 justify-center">
			<Button
				onClick={handlePrevGroup}
				disabled={startIndex === 0}
				variant={startIndex == 0 ? 'disabled' : 'primary'}
			>
				<ChevronLeft />
			</Button>

			{pageNumbers.map((num) => (
				<Button
					key={num}
					onClick={() => {
						setCurrentPage(num);
						window.scrollTo({ top: 0 });
					}}
					variant={num == currentPage ? 'secondary' : 'outline'}
				>
					{num}
				</Button>
			))}

			<Button
				onClick={handleNextGroup}
				disabled={startIndex + visiblePages >= totalPages}
				variant={startIndex + visiblePages >= totalPages ? 'disabled' : 'primary'}
			>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default PaginationBar;