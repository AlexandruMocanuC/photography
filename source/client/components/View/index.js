import React, { useReducer } from "react";
import Logo from "$website/components/Logo";
import Menu from "$website/components/Menu";
import PageView from "./PageView";
import reducer from "$website/reducer.js";

import $, { css } from "./style.css";

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default ({ data, isMenuOpened, onClick, name, colors }) => {
	const currentViewData =
		name == "home"
			? { ...data.home, categories: data.categories }
			: Object.keys(data.categories).indexOf(name) > -1
			? data.categories[name]
			: { ...data[name] } || {
					...data.home,
					categories: data.categories,
			  };
	const currentView = data[name]
		? name
		: Object.keys(data.categories).indexOf(name) > -1
		? "gallery"
		: "error";

	const initialState = {
		view: name,
		withData: currentView,
		viewData: currentViewData,
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const { view, viewData, withData } = state;

	const onSelect = view => {
		dispatch({
			type: "selectView",
			view: view,
			data: data,
			onClick: onClick,
		});
	};

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

	return !viewData ? null : (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>
				<b className={$.container}>
					<b
						className={$.content}
						style={isMenuOpened ? styleIn : styleOut}
					>
						<Logo
							image={data.logo}
							onSelect={() =>
								dispatch({
									type: "selectView",
									view: "home",
									data: data,
									onClick: () => {
										onClick(false);
									},
								})
							}
						/>
						<PageView
							data={viewData}
							view={withData}
							email={data.constants.email}
							phone={data.constants.phone}
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
						onClick={onClick}
					/>
					<Menu
						isOpen={isMenuOpened}
						items={data.menu || null}
						colors={menuColors}
						selectedView={view}
						onSelect={onSelect}
					/>
				</b>
			</State.Provider>
		</Dispatch.Provider>
	);
};
