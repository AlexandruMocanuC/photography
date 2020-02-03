export default function reducer(previous, action) {
	const command = action.type;
	const state = { ...previous };

	if (state.view == action.view) return state;

	switch (command) {
		case "selectView":
			const view = action.view;
			const data = action.data;

			const currentViewData =
				view == "home"
					? { ...data.home, categories: data.categories }
					: Object.keys(data.categories).indexOf(view) > -1
					? data.categories[view]
					: { ...data[view] } || {
							...data.home,
							categories: data.categories,
					  };

			const currentView = data[view]
				? view
				: Object.keys(data.categories).indexOf(view) > -1
				? "gallery"
				: "error";
			console.log(view);
			state.view = view;
			state.withData = currentView;
			state.viewData = currentViewData;

			break;

		case "set":
			state = action.initialState;

			break;

		default:
			throw Error("Website: action not found.");
	}
	action.onClick();
	return state;
}
