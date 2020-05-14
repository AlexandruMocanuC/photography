import React, { useReducer } from "react";
import View from "~/components/View";

import $, { css } from "./style.css";

export default (props) => {
	const { isMenuOpened, colors, staticBackground } = props;
	return (
		<b
			className={`${$.application} ${isMenuOpened ? $.opened_menu : ""}`}
			style={{
				background: `linear-gradient(122deg, ${colors.palette.filter(
					(color) => color + ", "
				)})`,
			}}
		>
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
