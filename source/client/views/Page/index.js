import React, { useState, useEffect, createElement } from "react";
import { debounce } from "@nore/std/utils";

import MobileApp from "./MobileApp";

import $, { css } from "./style.css";

const Page = ({ data, layout, colors, firstView, staticBackground }) => {
	const [isMobileView, setMobileView] = useState(0);
	const [isMenuOpened, toggleMenu] = useState(false);

	const props = {
		data,
		isMenuOpened,
		colors,
		name: window.location.pathname.slice(1) || "home",
		onClick: (target = null) => toggleMenu(!!target || !isMenuOpened),
	};

	const content = !data
		? null
		: createElement(layout, {
				...props,
		  });

	useEffect(initialize, []);

	function initialize() {
		const onResize = debounce(setNavigationIsMobile, 200);

		function setNavigationIsMobile() {
			setMobileView(window.innerWidth < 640);
		}

		setNavigationIsMobile();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}

	return isMobileView ? (
		<MobileApp>
			<b className={$.container_mobile}>{content}</b>
		</MobileApp>
	) : (
		<b
			className={`${$.application} ${isMenuOpened ? $.opened_menu : ""}`}
			style={{
				background: `linear-gradient(122deg, ${colors.palette.filter(
					color => color + ", "
				)})`,
			}}
		>
			<b
				className={$.wrapper}
				style={{
					backgroundImage: `url(${staticBackground || null})`,
				}}
			>
				<b className={$.container}>{content}</b>
			</b>
		</b>
	);
};

export default Page;
