export default function reducer(previous, action) {
	const command = action.type;
	const state = { ...previous };

	switch (command) {
		case "toggleMenu":
			state.isMenuOpened = !state.isMenuOpened;

			break;

		default:
			throw Error("Website: action not found.");
	}

	return state;
}
