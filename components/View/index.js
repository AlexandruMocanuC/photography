import React, { useContext } from "react";
import { State, Dispatch } from "~/components/DefaultContext";
import Logo from "~/components/Logo";
import Menu from "~/components/Menu";
// import PageView from "./PageView";

import $, { css } from "./style.css";

export default (props) => {
	const dispatch = useContext(Dispatch);
	const state = useContext(State);

	const { isMenuOpened, menu, colors, logo } = state;

	// const currentViewData =
	// 	view == "home"
	// 		? { ...data.home, categories: data.categories }
	// 		: Object.keys(data.categories).indexOf(view) > -1
	// 		? data.categories[view]
	// 		: { ...data[view] } || {
	// 				...data.home,
	// 				categories: data.categories,
	// 		  };

	// const currentView = data[view]
	// 	? view
	// 	: Object.keys(data.categories).indexOf(view) > -1
	// 	? "gallery"
	// 	: "error";

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

	return (
		<b className={$.container}>
			<b className={$.content} style={isMenuOpened ? styleIn : styleOut}>
				<Logo image={logo} />
				{props.children}
				{/*<PageView
					data={currentViewData}
					view={currentView}
					constants={constants}
					colors={colors}
				/>*/}
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
			<Menu isOpen={isMenuOpened} items={menu} colors={menuColors} />
		</b>
	);
};
