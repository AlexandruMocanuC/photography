import React from "react";
import { withOrientationChange } from "react-device-detect";
import View from "~/components/View";

import $, { css } from "./style.css";

let MobileApp = (props) => {
	const { isLandscape, isPortrait } = props;

	return (
		<b className={$.container}>
			<View>{props.children}</View>
		</b>
	);
};

MobileApp = withOrientationChange(MobileApp);

export default MobileApp;
