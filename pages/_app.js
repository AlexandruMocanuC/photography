import React, { useContext } from "react";
import App from "next/app";
import DefaultContext from "~/components/DefaultContext";

export default ({ Component, pageProps }) => {
	return (
		<DefaultContext>
			<Component {...pageProps} />
		</DefaultContext>
	);
};
