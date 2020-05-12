import React from "react";

import $, { css } from "./style.css";

export default ({ heading, description }) => (
	<b className={$.header}>
		<b className={$.heading}>{heading}</b>
		{!description ? null : <b className={$.description}>{description}</b>}
	</b>
);
