import App from "next/app";
import DefaultContext from "~/components/DefaultContext";

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<DefaultContext>
				<Component {...pageProps} />
			</DefaultContext>
		);
	}
}
