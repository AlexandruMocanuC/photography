import React, { useState, useEffect, useReducer, createElement } from "react";
import { isMobile } from "react-device-detect";
import ReactDOM from "react-dom";
import { Application, Scope, loadable, http } from "@nore/pwa";
import { keys } from "@nore/std/object";

import reducer from "$website/reducer.js";

import MobileApp from "./MobileApp";

import $, { css } from "./style.css";

const Standard = loadable(() => import("$website/components/View"));

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

const layouts = {
	standard: Standard,
};

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const Page = ({ data, layout, name, colors }) => {
	const initialState = {
		logo: data.logo,
		nav: data.menu,
		view: name,
		isMenuOpened: false,
		constants: data.constants,
		colors: colors,
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const { isMenuOpened } = state;

	const content = !data ? null : createElement(layout, { data });

	return (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>
				{isMobile ? (
					<MobileApp>
						<b className={$.container_mobile}>{content}</b>
					</MobileApp>
				) : (
					<b
						className={`${$.application} ${
							isMenuOpened ? $.opened_menu : ""
						}`}
						style={{
							background: `linear-gradient(122deg, ${colors.palette.filter(
								color => color + ", "
							)})`,
						}}
					>
						<b
							className={$.wrapper}
							style={{
								backgroundImage: `url(${data.staticBackground ||
									null})`,
							}}
						>
							<b className={$.container}>{content}</b>
						</b>
					</b>
				)}
			</State.Provider>
		</Dispatch.Provider>
	);
};

const View = () => {
	const [globals, setGlobals] = useState(null);

	useEffect(() => {
		http.get(`data.json`, {})
			.then(reply => {
				setGlobals(reply.body);
			})
			.catch(reply => {
				console.log("HTTP Error", reply);
			});
	}, []);

	const colors = globals
		? globals.constants.colors[
				getRandomInt(globals.constants.colors.length)
		  ]
		: null;

	return !globals
		? null
		: globals.menu.map(item => (
				<>
					{!item.submenu
						? null
						: item.submenu.map(subitem => (
								<Scope
									exact={!subitem.path}
									match={`/${
										subitem.path == "home"
											? ""
											: subitem.path
									}`}
									render={() => (
										<Page
											colors={colors}
											data={globals}
											path={subitem.path}
											name={
												subitem.name
													? subitem.name
													: subitem.path
											}
											layout={layouts[subitem.layoutType]}
										/>
									)}
									key={subitem.path}
								/>
						  ))}

					<Scope
						exact={!item.path}
						match={`/${item.path == "home" ? "" : item.path}`}
						render={() => (
							<Page
								colors={colors}
								data={globals}
								name={item.name ? item.name : item.path}
								layout={layouts[item.layoutType]}
							/>
						)}
						key={item.path}
					/>
				</>
		  ));
};

export default <View />;
