import React, { useReducer } from "react";
// import View from "~/components/View";

import $, { css } from "./style.css";

export default (props) => {
	console.log(props.children);
	const { data, isMenuOpened, colors } = props;
	return !data ? null : (
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
				style={{ backgroundImage: `url(${data.staticBackground})` }}
			>
				<b className={$.container}>
					{/*<View data={data} />*/}
					{props.children}
				</b>
			</b>
		</b>
	);
};
