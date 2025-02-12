import { useState, useEffect } from "react";

export const useRequestGetTodoes = (refreshTodosFlag, setIsLoading) => {
	const [todos, setTodos] = useState([]);

	//json-server --watch db.json --port 3004 --delay 2500 запуск сервера
	useEffect(() => {
		setIsLoading(true);
		fetch("http://localhost:3004/todos")
			.then((loadedData) => loadedData.json())
			.then((loadedTodoes) => {
				setTodos(loadedTodoes);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todos };
};
