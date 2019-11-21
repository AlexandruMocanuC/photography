import React from "react";
import Header from "~/components/Header";
import Gradient from "~/components/Gradient";

import $, { css } from "./style.css";

export default ({ data, view, constants, colors }) => (
	<b className={$.container}>
		{view == "home" ? (
			colors.gradients.map((gradient, key) => (
				<Gradient
					key={key}
					first={colors.palette[gradient.first]}
					last={colors.palette[gradient.last]}
				>
					<b
						style={{
							color: colors.palette[gradient.text],
							fontSize: "2rem",
							fontWeight: "bold",
						}}
					>
						testing
					</b>
				</Gradient>
			))
		) : view == "contact" ? (
			<b className={$.contact}>
				{email ? (
					<a href={`mailto:${constants.email}`}>{constants.email}</a>
				) : null}
				{phone ? (
					<a href={`tel:${constants.phone}`}>{constants.phone}</a>
				) : null}
			</b>
		) : (
			<b className={$.gallery}>gallery</b>
		)}
	</b>
);
