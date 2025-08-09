export default function handleFetch(data, selectedDept, keywords) {
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
		return allArticles
		.filter(article =>
			article.title?.toLowerCase().includes(keywords.toLowerCase())
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
	allArticles.sort((a, b) => {
		const [da, ma, ya] = a.published.split('-').map(Number);
		const [db, mb, yb] = b.published.split('-').map(Number);
		return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
	});
	return allArticles;

}
