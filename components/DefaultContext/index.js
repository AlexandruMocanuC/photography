import React, { createContext, useReducer } from "react";
import initialState from "~/initialState.js";
import reducer from "~/reducer.js";

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>{props.children}</State.Provider>
		</Dispatch.Provider>
	);
};
