import React from "react";
import $ from "./style.css";

export default ({ data = {}, email = null, phone = null }) => (
	<b className={$.container}>
		{data.email ? (
			<b>
				<a href={`mailto:${email}`}>{email}</a>
			</b>
		) : null}
		{data.phone ? (
			<b>
				<a href={`tel:${phone}`}>{phone}</a>
			</b>
		) : null}
	</b>
);
