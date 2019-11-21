import React from "react";
import { withOrientationChange } from "react-device-detect";
import View from "~/components/View";

import $, { css } from "./style.css";

let MobileApp = ({ data, isLandscape, isPortrait }) => {
	return !data ? null : (
		<b className={$.container}>
			<View data={data} />
		</b>
	);
};

MobileApp = withOrientationChange(MobileApp);

export default MobileApp;
