import React, { useContext } from "react";
import { State, Dispatch } from "~/pages/home";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
import PageView from "./PageView";

import $, { css } from "./style.css";

export default ({ data }) => {
	const dispatch = useContext(Dispatch);
	const state = useContext(State);

	const { isMenuOpened, view, nav, constants, colors } = state;

	const currentViewData =
		view == "home"
			? { ...data.home, categories: data.categories.slice() }
			: view == "contact"
			? { ...data.contact }
			: data.categories.find(category => category.name == view);

	const styleIn = {
		opacity: 0.5,
		transform: "translateX(-100%)",
		overflow: "hidden",
		height: "100%",
	};

	const styleOut = {
		opacity: 1,
		transform: "translateX(0%)",
	};
	const menuClasses = `${$.menu} ion-navicon ${
		isMenuOpened ? $.is_opened : ""
	}`;

	const menuColors = {
		primary: colors.palette[colors.menu.primary],
		accent: colors.palette[colors.menu.accent],
	};

	return !data ? null : (
		<b className={$.container}>
			<b className={$.content} style={isMenuOpened ? styleIn : styleOut}>
				<Logo
					image={data.logo}
					onSelect={view =>
						dispatch({
							type: "selectView",
							view: view,
						})
					}
				/>
				<PageView
					data={currentViewData}
					view={view}
					constants={constants}
					colors={colors}
				/>
			</b>
			<b
				className={menuClasses}
				style={{
					color: isMenuOpened
						? menuColors.primary
						: menuColors.accent,
				}}
				onClick={() => dispatch({ type: "toggleMenu" })}
			/>
			<Menu
				isOpen={isMenuOpened}
				items={nav}
				colors={menuColors}
				selectedView={view}
				onSelect={view =>
					dispatch({
						type: "selectView",
						view: view,
					})
				}
			/>
		</b>
	);
};
