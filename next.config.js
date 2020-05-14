const withCSS = require("@zeit/next-css");

const isProduction = process.env.NODE_ENV === "production";

const repository = "photography";
const publicURL = isProduction
	? `https://AlexandruMocanuC.github.io/${repository}`
	: "";
const base = isProduction ? "/photography" : "";

const routes = {
	"/": { page: "/" },
	"/about": { page: "/about" },
};

const config = {
	assetPrefix: publicURL,
	publicRuntimeConfig: {
		url: publicURL,
		base: base,
	},
	exportPathMap: () => routes,
	webpack(config, options) {
		config.resolve.alias["~"] = config.context;
		config.output.publicPath = isProduction ? `/${repository}` : "/";

		return config;
	},
};

const cssModules = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	},
};

module.exports = withCSS({
	...cssModules,
	...config,
});
