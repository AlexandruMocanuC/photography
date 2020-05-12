import React from "react";
import $, { css } from "./style.css";

export default ({ image, onSelect = () => {} }) => (
	<b className={$.logo} onClick={() => onSelect("home")}>
		<img src={image} />
	</b>
);
