import data from "~/public/staticData";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const initialState = {
	...data,
	colors: data.colors[getRandomInt(data.colors.length)],
	isMenuOpened: false,
};

export default initialState;
