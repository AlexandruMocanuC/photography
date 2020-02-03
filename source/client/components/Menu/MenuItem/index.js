import React from "react";
import { Link } from "@nore/pwa";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected, onSelect }) => (
	<Link
		onClick={() => onSelect(view.path)}
		class={`${$.item} ${isSelected ? $.is_selected : ""} ${
			isSubItem ? $.sub_menu : ""
		}`}
		label={view.name || view.path}
		to={view.path == "home" ? "/" : `/${view.path}`}
		native
	/>
);
