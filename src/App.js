import styles from "./App.module.css";
import { useTodos } from "./hooks";
import { AppContext } from "./context";
import {
	ButtonSort,
	IsLoading,
	Todos,
	СreateNewTodo,
	SearchTodo,
} from "./components";

export const App = () => {
	const {
		todos,
		isloading,
		error,
		setIsLoading,
		deletetodo,
		updateTodo,
		searchPhrase,
		setSearchPhrase,
		createTodo,
	} = useTodos();

	if (isloading) return <IsLoading />;
	if (error) return <div>{error}</div>;
	return (
		<>
			<AppContext
				value={{
					todos,
					setIsLoading,
					deletetodo,
					updateTodo,
					searchPhrase,
					setSearchPhrase,
					createTodo,
				}}
			>
				<div className={styles.appContainer} id="taskList">
					<h1 className={styles.appHeader}>TO DO LIST</h1>

					<ButtonSort />
					<SearchTodo />
					<СreateNewTodo />
					<Todos />
				</div>
			</AppContext>
		</>
	);
};
