import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { BASE } from "~/playground.js";
import $, { css } from "./style.css";

export default ({ isSubItem, view, isSelected }) => {
	const router = useRouter();
	// console.log(router);
	return (
		<Link href={`/${view == "home" ? "" : view}`} shallow>
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
};
