import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => <div>Контент каталога</div>;
const Contacts = () => <div>Контент контактов</div>;

export const Exp = () => {
	return (
		<div className={styles.app}>
			<div>
				<h3>Меню</h3>
				<ul>
					<li>
						<a href="/">Главная</a>
					</li>
					<li>
						<a href="/catalog">Каталог</a>
					</li>
					<li>
						<a href="/contacts">Контакты</a>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</div>
	);
};
