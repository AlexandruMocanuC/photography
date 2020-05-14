import React, { useContext } from "react";
import { isMobile } from "react-device-detect";
import { State, Dispatch } from "~/components/DefaultContext";

import Menu from "~/components/Menu";

import $ from "./style.css";

export default () => {
	const dispatch = useContext(Dispatch);
	const state = useContext(State);

	// const { isMenuOpened, menu, colors } = state;

	// const menuColors = {
	// 	primary: colors.palette[colors.menu.primary],
	// 	accent: colors.palette[colors.menu.accent],
	// };
	// useEffect(() => {
	// 	fetch(`${BASE}/data.json`, {})
	// 		.then((reply) => {
	// 			console.log(reply);
	// 			reply.json();
	// 		})
	// 		.then((selected) => {
	// 			setData({
	// 				logo: selected.logo,
	// 				staticBackground: selected.staticBackground,
	// 				colors:
	// 					selected.colors[getRandomInt(selected.colors.length)],
	// 			});
	// 		})
	// 		.catch((reply) => {
	// 			console.log("HTTP Error", reply);
	// 		});
	// }, []);

	return (
		<b
			className={$.application}
			onClick={() => dispatch({ type: "toggleMenu" })}
		>
			home
			{/*<Menu
				isOpen={isMenuOpened}
				items={menu}
				colors={menuColors}
				onSelect={(view) =>
					dispatch({
						type: "selectView",
						view: view,
					})
				}
			/>*/}
		</b>
	);
};
