import React, { useState, useEffect } from "react";
import { Scope, loadable, http } from "@nore/pwa";
import { keys } from "@nore/std/object";

import Page from "./Page";

const Standard = loadable(() => import("$website/components/View"));

const layouts = {
	standard: Standard,
};

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const Scopes = ({ colors, staticBackground, data, firstView }) =>
	data &&
	data.menu.map((item, index) => (
		<React.Fragment key={index}>
			{!item.submenu
				? null
				: item.submenu.map(subitem => (
						<Scope
							exact={subitem.path == "home"}
							match={`/${
								subitem.path == "home" ? "" : subitem.path
							}`}
							render={() => (
								<Page
									staticBackground={staticBackground}
									colors={colors}
									data={data}
									layout={layouts[subitem.layoutType]}
								/>
							)}
							key={subitem.path}
						/>
				  ))}

			<Scope
				exact={item.path == "home"}
				match={`/${item.path == "home" ? "" : item.path}`}
				render={() => (
					<Page
						staticBackground={staticBackground}
						colors={colors}
						data={data}
						layout={layouts[item.layoutType]}
					/>
				)}
				key={item.path}
			/>
		</React.Fragment>
	));

const View = () => {
	const [globals, setGlobals] = useState(null);

	useEffect(() => {
		http.get(`data.json`, {})
			.then(reply => {
				setGlobals(reply.body);
			})
			.catch(reply => {
				console.log("HTTP Error", reply);
			});
	}, []);

	const colors = globals
		? globals.constants.colors[
				getRandomInt(globals.constants.colors.length)
		  ]
		: null;

	const staticBackground = globals ? globals.staticBackground : null;

	return (
		<Scopes
			colors={colors}
			data={globals}
			staticBackground={staticBackground}
		/>
	);
};

export default <View />;
