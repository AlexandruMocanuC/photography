import React, { useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Dispatch } from "~/components/DefaultContext";
import { BASE } from "~/playground.js";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected }) => {
	const dispatch = useContext(Dispatch);
	const router = useRouter();
	// console.log(router);
	return (
		<Link
			// href={`/${view == "home" ? "" : view}`}
			href={`/${view == "home" ? "" : view}`}
			shallow
		>
			<b
				className={`${$.item} ${isSelected ? $.is_selected : ""} ${
					isSubItem ? $.sub_menu : ""
				}`}
				onClick={() => dispatch({ type: "toggleMenu" })}
			>
				{view}
			</b>
		</Link>
	);
};
