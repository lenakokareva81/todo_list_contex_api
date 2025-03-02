export const searchTodos = (todos, searchPhrase = "") => {
	console.log("searchPhrase", searchPhrase);
	return todos.filter(({ id, title, completed }) =>
		title.includes(searchPhrase),
	);
};
