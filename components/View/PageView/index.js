import React from "react";
import Header from "~/components/Header";
import Gradient from "~/components/Gradient";
import Contact from "~/views/contact";

import $, { css } from "./style.css";

export default ({ data, view, constants, colors }) => (
	<b className={$.container}>
		View is {view}
		<Header heading={data.heading} description={data.description} />
		{view == "error" ? (
			<b className={$.gallery}>page not found</b>
		) : view == "contact" ? (
			<Contact
				data={data}
				email={constants.email}
				phone={constants.phone}
			/>
		) : view == "gallery" ? (
			<b>gallery view</b>
		) : (
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
		)}
	</b>
);
