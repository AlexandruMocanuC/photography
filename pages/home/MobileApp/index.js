import React from "react";
import { withOrientationChange } from "react-device-detect";
import View from "~/components/View";

import $, { css } from "./style.css";

let MobileApp = ({ data, isLandscape, isPortrait }) => {
	return !data ? null : <View data={data} />;
};

MobileApp = withOrientationChange(MobileApp);

export default MobileApp;
