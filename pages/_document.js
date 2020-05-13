import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		const { __NEXT_DATA__ } = this.props;
		const { assetPrefix } = __NEXT_DATA__;
		const stylesheet = `${assetPrefix}/_next/static/style.css`;

		return (
			<html>
				<title>AMC Photography</title>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css"
					/>

					<link
						href="https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Lato:400"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
					/>

					<style>{`
						html {
							box-sizing: border-box;
						}
						*, *:before, *:after {
							box-sizing: inherit;
						}
						b{
							display: block;
							font-weight: normal;
						}
						i{
							display: inline-block;
							font-style: normal;
						}
						a{
						    text-decoration: inherit;
    						color: inherit;
						}
						input{
							color: inherit;
						}
						input::placeholder{
							color: inherit;
						}
						textarea{
							color: inherit;
							width: 100%;
							min-width: 100%;
							max-width: 100%;
						}
						textarea::placeholder{
							color: inherit;
						}
					`}</style>

					<link rel="stylesheet" href={stylesheet} />

					<script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
