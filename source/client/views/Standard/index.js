import React, { useReducer } from "react";
import View from "$website/components/View";

import $, { css } from "./style.css";

export default ({ data }) => (
	<b className={$.container}>
		<View data={data} />
	</b>
);
