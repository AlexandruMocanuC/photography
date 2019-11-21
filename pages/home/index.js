import React, { useReducer } from "react";
import { isMobile } from "react-device-detect";
import reducer from "./reducer.js";

import MobileApp from "./MobileApp";
import App from "./App";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default ({ data = {} }) => {
	const initialState = {
		logo: data.logo,
		nav: data.menu,
		view: data.view,
		isMenuOpened: false,
		constants: data.constants,
		colors:
			data.constants.colors[getRandomInt(data.constants.colors.length)],
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>
				{isMobile ? (
					<MobileApp data={data} />
				) : (
					<App
						data={data}
						isMenuOpened={state.isMenuOpened}
						colors={state.colors}
					/>
				)}
			</State.Provider>
		</Dispatch.Provider>
	);
};
