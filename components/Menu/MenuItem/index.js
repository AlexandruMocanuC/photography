import React from "react";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected, onSelect = () => {} }) => (
	<b
		className={`${$.item} ${isSelected ? $.is_selected : ""} ${
			isSubItem ? $.sub_menu : ""
		}`}
		onClick={() => onSelect(view)}
	>
		{view}
	</b>
);
