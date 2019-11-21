export default function reducer(previous, action) {
	const command = action.type;
	const state = { ...previous };

	switch (command) {
		case "selectView":
			const view = action.view;

			state.view = view;
			state.isMenuOpened = false;

			break;

		case "toggleMenu":
			state.isMenuOpened = !state.isMenuOpened;

			break;

		case "set":
			state = action.initialState;

			break;

		default:
			throw Error("Website: action not found.");
	}

	return state;
}
