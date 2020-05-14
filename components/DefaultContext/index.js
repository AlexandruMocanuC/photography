import React, { createContext, useReducer } from "react";
import { isMobile } from "react-device-detect";
import initialState from "~/initialState.js";
import reducer from "~/reducer.js";
import MobileApp from "./MobileApp";
import App from "./App";

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { isMenuOpened, colors, staticBackground } = state;

	return (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>
				{isMobile ? (
					<MobileApp isMenuOpened={isMenuOpened} colors={colors}>
						{props.children}
					</MobileApp>
				) : (
					<App
						isMenuOpened={isMenuOpened}
						colors={colors}
						staticBackground={staticBackground}
					>
						{props.children}
					</App>
				)}
			</State.Provider>
		</Dispatch.Provider>
	);
};
