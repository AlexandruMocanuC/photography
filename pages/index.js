import React, { useState, useEffect } from "react";
import Head from "next/head";

import { BASE } from "~/playground";

import Home from "./home";
import $ from "./style.css";

export default () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`${BASE}/data.json`, {})
			.then(reply => {
				reply.json().then(selected => {
					setData(selected);
				});
			})
			.catch(reply => {
				console.log("HTTP Error", reply);
			});
	}, []);
	return !data ? null : (
		<b className={$.application}>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Lato:400"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
				/>
			</Head>
			<Home data={data} />
		</b>
	);
};
