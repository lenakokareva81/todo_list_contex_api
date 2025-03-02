import { useState, useEffect } from "react";
import {
	requestTodos,
	requestDeleteTodo,
	requestUpdateTodo,
	requestCreateTodo,
} from "../api";
import { setTodoInTodos, sortTodos } from "../utils";

// json-server --watch db.json --port 3004 --delay 2500
// cd /e/фротент/result/todo_list_contex_api/src; json-server --watch db.json --port 3004
// cd /e/фротент/result/todo_list_contex_api; npm start
export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isloading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		setIsLoading(true);

		try {
			const todos = await requestTodos();
			setTodos(todos);
		} catch (error) {
			setError(error);
		}
		setIsLoading(false);
	};

	const deletetodo = async (id) => {
		setIsLoading(true);

		try {
			await requestDeleteTodo(id);
			setTodos(todos.filter((todo) => todo.id !== id));
		} catch (error) {
			setError(error);
		}
		setIsLoading(false);
	};

	const updateTodo = async (id, title, completed) => {
		setIsLoading(true);
		const newTodoData = { id, title, completed };
		try {
			await requestUpdateTodo(id, title, completed);
			setTodos(setTodoInTodos(todos, newTodoData));
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	const createTodo = (title) => {
		setIsLoading(true);
		try {
			requestCreateTodo(title).then((data) => {
				setTodos([...todos, data]);

				setIsLoading(false);
			});
		} catch (error) {
			setError(error);
		}
	};

	const sortedTodos = isSorted ? sortTodos(todos) : todos;

	return {
		todos: sortedTodos,
		isloading,
		error,
		setIsLoading,
		deletetodo,
		updateTodo,
		createTodo,
		setTodos,
		searchPhrase,
		setSearchPhrase,
		isSorted,
		setIsSorted,
	};
};
