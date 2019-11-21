import React, { useState, useEffect, useReducer } from "react";
import { isMobile } from "react-device-detect";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import reducer from "~/reducer.js";

import MobileApp from "~/views/home/MobileApp";
import App from "~/views/home/App";

import $ from "./style.css";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export const State = React.createContext(null);
export const Dispatch = React.createContext(null);

export default function Application() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`data.json`, {})
			.then(reply => {
				reply.json().then(selected => {
					setData(selected);
				});
			})
			.catch(reply => {
				console.log("HTTP Error", reply);
			});
	}, [useRouter().asPath]);

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
}

const Home = ({ data = {} }) => {
	const initialState = {
		logo: data.logo,
		nav: data.menu,
		view: useRouter().asPath.slice(1) || "home",
		isMenuOpened: false,
		constants: data.constants,
		colors:
			data.constants.colors[getRandomInt(data.constants.colors.length)],
	};

	useEffect(() => {
		const handleRouteChange = url => {
			initialState.view = url.slice(1) || "home";
		};

		Router.events.on("routeChangeStart", handleRouteChange);
		return () => {
			Router.events.off("routeChangeStart", handleRouteChange);
		};
	}, []);

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Dispatch.Provider value={dispatch}>
			<State.Provider value={state}>
				{isMobile ? (
					<MobileApp
						data={data}
						isMenuOpened={state.isMenuOpened}
						colors={state.colors}
					/>
				) : (
					<App
						data={data}
						isMenuOpened={state.isMenuOpened}
						colors={state.colors}
					/>
				)}
			</State.Provider>
		</Dispatch.Provider>
	);
};
