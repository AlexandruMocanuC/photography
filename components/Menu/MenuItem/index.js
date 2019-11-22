import React from "react";
import Link from "next/link";
import Router from "next/router";
import { BASE } from "~/playground.js";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected, onSelect = () => {} }) => (
	<Link
		href={`${BASE}/?view=${view == "home" ? "" : view}`}
		as={`${BASE}/${view == "home" ? "" : view}`}
	>
		<a>
			<b
				className={`${$.item} ${isSelected ? $.is_selected : ""} ${
					isSubItem ? $.sub_menu : ""
				}`}
			>
				{view}
			</b>
		</a>
	</Link>
);
