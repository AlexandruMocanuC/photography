import React from "react";
import { withOrientationChange } from "react-device-detect";
import View from "$website/components/View";

import $, { css } from "./style.css";

let MobileApp = ({ data, isLandscape, isPortrait, children }) => {
	console.log(children);
	return children ? (
		<>{children}</>
	) : (
		<b className={$.container}>
			<View data={data} />
		</b>
	);
};

MobileApp = withOrientationChange(MobileApp);

export default MobileApp;
