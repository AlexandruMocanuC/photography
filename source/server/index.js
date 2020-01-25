import { log, on, config } from "@nore/cms";

on("ready", async () => {
	const { href } = config("url");

	log.info(`Server started: ${href}`);
});
