import React from "react";
import $, { css } from "./style.css";

export default props => (
	<b
		className={$.gradient}
		style={{
			background: `linear-gradient(122deg, ${props.first} 30%, ${
				props.last
			})`,
		}}
	>
		{props.children}
	</b>
);
