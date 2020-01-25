import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Application, Scope, loadable } from "@nore/pwa";
import views from "./views";

function render() {
	const application = <Application>{views}</Application>;
	const container = document.getElementById("application");

	ReactDOM.render(application, container, () => {
		container.classList.replace("is_loading", "is_loaded");
	});
}

render();

if (IS_DEVELOPMENT) {
	// enable HMR (Hot Module Replacement)
	module.hot && module.hot.accept();
}
