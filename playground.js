import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const BASE = publicRuntimeConfig.base;
export const URL = publicRuntimeConfig.url;
