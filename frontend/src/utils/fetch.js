export default function handleFetch(data, selectedDept, keywords, selectedDate) {
	// Helper to convert month name/number to number
	const monthToNumber = (month) => {
		if (month == null) return null;
		if (typeof month === 'number') return month;
		const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
		const idx = months.indexOf(String(month).toLowerCase());
		return idx >= 0 ? idx + 1 : null;
	};
	// Helper to match article date against selectedDate
	const matchDate = (published, sel) => {
		if (!sel) return true;
		const [d, m, y] = published.split('-').map(Number);
		const selDay = Number(sel.date) || null;
		const selMonth = monthToNumber(sel.month);
		const selYear = Number(sel.year) || null;
		return (!selDay || d === selDay) && (!selMonth || m === selMonth) && (!selYear || y === selYear);
	};
	const allArticles = [];

	if (keywords && !selectedDept) {
		Object.entries(data.dept).forEach(([deptName, yearObj]) => {
			Object.values(yearObj["2025"]).forEach((monthObj) => {
				if (monthObj.articles) {
					monthObj.articles.forEach(article => {
						allArticles.push({ ...article, dept: deptName });
					});
				}
			});
		});
		// Apply keyword and date filter, then sort
		return allArticles
			.filter(article =>
				article.title?.toLowerCase().includes(keywords.toLowerCase()) &&
				matchDate(article.published, selectedDate)
			)
			.sort((a, b) => {
				const [da, ma, ya] = a.published.split('-').map(Number);
				const [db, mb, yb] = b.published.split('-').map(Number);
				return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
			});
	}
	else if (selectedDept === 'All News') {
		Object.entries(data.dept).forEach(([deptName, yearObj]) => {
			Object.values(yearObj["2025"]).forEach((monthObj) => {
				if (monthObj.articles) {
					monthObj.articles.forEach(article => {
						allArticles.push({ ...article, dept: deptName });
					});
				}
			});
		});
		// Date filter for All News
	} else {
		const yearObj = data.dept[selectedDept];
		if (yearObj) {
			Object.values(yearObj["2025"]).forEach((monthObj) => {
				if (monthObj.articles) {
					monthObj.articles.forEach(article => {
						allArticles.push({ ...article, dept: selectedDept });
					});
				}
			});
		}
	}
	// Apply date filter (no keyword filtering here to keep existing behavior)
	const filteredByDate = selectedDate ? allArticles.filter(a => matchDate(a.published, selectedDate)) : allArticles;

	filteredByDate.sort((a, b) => {
		const [da, ma, ya] = a.published.split('-').map(Number);
		const [db, mb, yb] = b.published.split('-').map(Number);
		return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
	});
	return filteredByDate;
}
