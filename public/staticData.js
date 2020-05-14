export default {
	staticBackground: "static-background.png",
	logo: "dropbox_logo.png",
	colors: [
		{
			palette: ["#33384e", "#3e5d7a", "#f2f0e1", "#dda18c", "#d65a40"],
			menu: {
				primary: 2,
				accent: 4,
			},
			gradients: [
				{
					first: 1,
					last: 0,
					text: 2,
				},
				{
					first: 2,
					last: 1,
					text: 0,
				},
				{
					first: 2,
					last: 3,
					text: 0,
				},
				{
					first: 3,
					last: 0,
					text: 2,
				},
				{
					first: 3,
					last: 4,
					text: 2,
				},
			],
		},
		{
			palette: ["#cc7952", "#943d2c", "#474344", "#e58d77", "#dfd0b8"],
			menu: {
				primary: 4,
				accent: 3,
			},
			gradients: [
				{
					first: 0,
					last: 1,
					text: 4,
				},
				{
					first: 1,
					last: 3,
					text: 4,
				},
				{
					first: 2,
					last: 3,
					text: 4,
				},
				{
					first: 3,
					last: 0,
					text: 2,
				},
				{
					first: 4,
					last: 2,
					text: 1,
				},
			],
		},
		{
			palette: ["#231f20", "#426c95", "#f15f4e", "#f4d550", "#faf7d8"],
			menu: {
				primary: 4,
				accent: 2,
			},
			gradients: [
				{
					first: 0,
					last: 1,
					text: 4,
				},
				{
					first: 1,
					last: 2,
					text: 4,
				},
				{
					first: 2,
					last: 3,
					text: 0,
				},
				{
					first: 3,
					last: 4,
					text: 0,
				},
				{
					first: 4,
					last: 2,
					text: 0,
				},
			],
		},
		{
			palette: ["#43045f", "#4e0362", "#c63264", "#ff9799", "#ffbaab"],
			menu: {
				primary: 4,
				accent: 2,
			},
			gradients: [
				{
					first: 0,
					last: 3,
					text: 4,
				},
				{
					first: 1,
					last: 2,
					text: 4,
				},
				{
					first: 2,
					last: 0,
					text: 4,
				},
				{
					first: 3,
					last: 2,
					text: 0,
				},
				{
					first: 3,
					last: 4,
					text: 1,
				},
			],
		},
		{
			palette: ["#54c0cc", "#1f4f59", "#7ea00e", "#dcd964", "#213502"],
			menu: {
				primary: 3,
				accent: 2,
			},
			gradients: [
				{
					first: 0,
					last: 2,
					text: 4,
				},
				{
					first: 1,
					last: 3,
					text: 4,
				},
				{
					first: 2,
					last: 3,
					text: 4,
				},
				{
					first: 3,
					last: 0,
					text: 1,
				},
				{
					first: 4,
					last: 0,
					text: 3,
				},
			],
		},
		{
			palette: ["#7bd5f5", "#787ff6", "#4adede", "#1ca7ec", "#1f2f90"],
			menu: {
				primary: 0,
				accent: 1,
			},
			gradients: [
				{
					first: 0,
					last: 1,
					text: 4,
				},
				{
					first: 1,
					last: 2,
					text: 4,
				},
				{
					first: 2,
					last: 3,
					text: 4,
				},
				{
					first: 3,
					last: 4,
					text: 0,
				},
				{
					first: 4,
					last: 3,
					text: 2,
				},
			],
		},
		{
			palette: ["#d9ecf2", "#f56a79", "#ff414d", "#1aa6b7", "#002d40"],
			menu: {
				primary: 0,
				accent: 3,
			},
			gradients: [
				{
					first: 0,
					last: 3,
					text: 4,
				},
				{
					first: 2,
					last: 1,
					text: 0,
				},
				{
					first: 0,
					last: 2,
					text: 4,
				},
				{
					first: 4,
					last: 3,
					text: 0,
				},
				{
					first: 2,
					last: 4,
					text: 0,
				},
			],
		},
		{
			palette: ["#7c5efd", "#99eeee", "#f7bc23", "#ff4848", "#303030"],
			menu: {
				primary: 2,
				accent: 3,
			},
			gradients: [
				{
					first: 0,
					last: 1,
					text: 4,
				},
				{
					first: 1,
					last: 2,
					text: 4,
				},
				{
					first: 2,
					last: 3,
					text: 4,
				},
				{
					first: 3,
					last: 0,
					text: 4,
				},
				{
					first: 4,
					last: 0,
					text: 1,
				},
			],
		},
	],
	menu: [
		{ name: "home", submenu: false },
		{ name: "about", submenu: false },
		{ name: "services", submenu: false },
		{
			name: "events",
			submenu: ["babyshower", "birthday", "small party"],
		},
		{ name: "photoshoots", submenu: ["babies", "couples"] },
		{ name: "random", submenu: false },
		{ name: "contact", submenu: false },
	],
};
