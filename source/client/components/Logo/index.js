import React from "react";
import { Link } from "@nore/pwa";
import $, { css } from "./style.css";

export default ({ image, onSelect }) => (
	<Link to="/" class={$.logo} onClick={() => onSelect()}>
		<img src={image} />
	</Link>
);
