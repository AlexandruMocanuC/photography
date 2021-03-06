import React from "react";
import { useTrail, animated, config } from "react-spring";
import MenuItem from "./MenuItem";
import $ from "./style.css";

export default ({ isOpen, items, selectedView, colors }) => {
	const menuItemIn = {
		opacity: 1,
		x: 0,
	};
	const menuItemOut = {
		opacity: 0,
		x: 20,
	};
	const menuVisibility = isOpen ? menuItemIn : menuItemOut;

	const trailing = (navItems, delay = 0) => {
		return useTrail(navItems.length, {
			config: { mass: 1, tension: 230, friction: 26 },
			x: menuVisibility.x,
			opacity: menuVisibility.opacity,
			from: menuVisibility,
			to: menuVisibility,
			delay: delay,
		});
	};

	return (
		<b
			className={$.container}
			style={{
				transform: `${
					isOpen ? "translate3d(-1vh,0,0)" : "translate3d(100%,0,0)"
				}`,
				transition: "transform 0.5s ease-in-out",
			}}
		>
			<b className={$.wrapper}>
				<style>{`.${$.container} {
				--data_color_primary: ${colors.primary};
				--data_color_accent: ${colors.accent};
			}`}</style>
				{trailing(items).map(({ x, opacity, ...rest }, index) => {
					const view = items[index];

					return !view.submenu ? (
						<animated.div
							key={view.name}
							style={{
								...rest,

								transform: x.interpolate(
									(x) => `translate3d(${x}vw,0,0)`
								),
								opacity: opacity,
							}}
						>
							<MenuItem
								isSelected={view.name == selectedView}
								view={view.name}
							/>
						</animated.div>
					) : (
						<animated.div
							key={view.name}
							style={{
								...rest,

								transform: x.interpolate(
									(x) => `translate3d(${x}vw,0,0)`
								),
								opacity: opacity,
							}}
						>
							<MenuItem
								isSelected={view.name == selectedView}
								view={view.name}
							/>
							{trailing(view.submenu, 200 * index).map(
								({ x, opacity, ...rest }, key) => {
									const subview = view.submenu[key];

									return (
										<animated.div
											key={subview}
											style={{
												...rest,

												transform: x.interpolate(
													(x) =>
														`translate3d(${x}vw,0,0)`
												),
												opacity: opacity,
											}}
										>
											<MenuItem
												isSubItem
												isSelected={
													subview == selectedView
												}
												view={subview}
											/>
										</animated.div>
									);
								}
							)}
						</animated.div>
					);
				})}
			</b>
		</b>
	);
};
