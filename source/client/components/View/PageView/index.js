import React from "react";
import Header from "$website/components/Header";
import Gradient from "$website/components/Gradient";
import Contact from "$website/views/contact";

import $, { css } from "./style.css";

export default ({ data, view, email, phone, colors, withData }) => (
	<b className={$.container}>
		View is {view}
		<Header
			heading={data.heading || null}
			description={data.description || null}
		/>
		{view == "error" ? (
			<b className={$.gallery}>page not found</b>
		) : view == "contact" ? (
			<Contact data={data} email={email} phone={phone} />
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
