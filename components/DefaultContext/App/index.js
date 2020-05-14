import React, { useReducer } from "react";
import View from "~/components/View";

import $, { css } from "./style.css";

export default (props) => {
	const { isMenuOpened, colors, staticBackground } = props;

	const order = [
		"primary",
		"secondary",
		"accent",
		"neutral",
		"complementary",
	];

	let colorsVar = "";
	colors.palette.map((color, index) => {
		colorsVar += `--data_color_${order[index]}: ${color};`;
	});

	return (
		<b className={`${$.application} ${isMenuOpened ? $.opened_menu : ""}`}>
			<style>{`.${$.application} {
				${colorsVar}
			}`}</style>
			<b
				className={$.wrapper}
				style={{ backgroundImage: `url(${staticBackground})` }}
			>
				<b className={$.container}>
					<View>{props.children}</View>
				</b>
			</b>
		</b>
	);
};
