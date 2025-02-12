import { use } from "react";
import { AppContext } from "../../context";

export const sortAlphabet = (isAlphabet) => {
	const todos = use(AppContext);

	if (isAlphabet) {
		return todos.sort(function (a, b) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});
	} else {
		return todos.sort(function (a, b) {
			if (a.id < b.id) {
				return -1;
			}
			if (a.id > b.id) {
				return 1;
			}
			return 0;
		});
	}
};
