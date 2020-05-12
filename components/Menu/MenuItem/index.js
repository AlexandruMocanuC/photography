import React from "react";
import Link from "next/link";
import Router from "next/router";
import { BASE } from "~/playground.js";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected, onSelect = () => {} }) => (
	<b
		className={`${$.item} ${isSelected ? $.is_selected : ""} ${
			isSubItem ? $.sub_menu : ""
		}`}
		onClick={() => {
			Router.push(`${BASE}/`, `${BASE}/${view == "home" ? "" : view}`, {
				shallow: true,
			});
			onSelect(view);
		}}
	>
		{view}
	</b>
);
