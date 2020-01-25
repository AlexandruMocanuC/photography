import React, { useReducer } from "react";
import View from "$website/components/View";

import $, { css } from "./style.css";

export default ({ data, isMenuOpened, colors }) => {
	return !data ? null : (
		<b
			className={`${$.application} ${isMenuOpened ? $.opened_menu : ""}`}
			style={{
				background: `linear-gradient(122deg, ${colors.palette.filter(
					color => color + ", "
				)})`,
			}}
		>
			<b
				className={$.wrapper}
				style={{ backgroundImage: `url(${data.staticBackground})` }}
			>
				<b className={$.container}>
					<View data={data} />
				</b>
			</b>
		</b>
	);
};
