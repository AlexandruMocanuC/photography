import React from "react";
import { withOrientationChange } from "react-device-detect";
// import View from "~/components/View";

import $, { css } from "./style.css";

let MobileApp = (props) => {
	console.log(props);
	const { data, isLandscape, isPortrait } = props;

	return !data ? null : (
		<b className={$.container}>
			{/*<View data={data} />*/}
			{props.children}
		</b>
	);
};

MobileApp = withOrientationChange(MobileApp);

export default MobileApp;
