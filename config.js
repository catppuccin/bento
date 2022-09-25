// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: "Catppuccin",
	openInNewTab: true,
	twelveHourFormat: false,

	// Theme
	theme: "mocha",
	imageBackground: false,

	// Greetings
	greetingMorning: "🌅 Good morning!",
	greetingAfternoon: "🌇 Good afternoon,",
	greetingEvening: "🌆 Good evening,",
	greetingNight: "🌃 Go to Sleep!",

	// Layout
	bentoLayout: "bento", // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: "InsertYourAPIKeyHere123456", // Write here your API Key
	weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: "C", // 'F', 'C'
	language: "en", // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: "37.775",
	defaultLongitude: "-122.419",

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: "18:30",
	hourDarkThemeInactive: "07:00",

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: "1",
			name: "Github",
			icon: "github",
			link: "https://github.com/",
		},
		{
			id: "2",
			name: "Catppuccin",
			icon: "palette",
			link: "https://github.com/catppuccin/catppuccin",
		},
		{
			id: "3",
			name: "Reddit",
			icon: "martini",
			link: "https://reddit.com",
		},
		{
			id: "4",
			name: "Mail",
			icon: "mail",
			link: "https://mail.google.com",
		},
		{
			id: "5",
			name: "Discord",
			icon: "message-circle",
			link: "https://discord.com/app",
		},
		{
			id: "6",
			name: "Odysee",
			icon: "youtube",
			link: "https://odysee.com/",
		},
	],

	secondButtonsContainer: [
		{
			id: "1",
			name: "Music",
			icon: "headphones",
			link: "https://open.spotify.com",
		},
		{
			id: "2",
			name: "twitter",
			icon: "twitter",
			link: "https://twitter.com/",
		},
		{
			id: "3",
			name: "Calendar",
			icon: "calendar",
			link: "https://calendar.google.com/",
		},
		{
			id: "4",
			name: "Amazon",
			icon: "shopping-bag",
			link: "https://amazon.com/",
		},
		{
			id: "5",
			name: "Hashnode",
			icon: "pen-tool",
			link: "https://hashnode.com/",
		},
		{
			id: "6",
			name: "Figma",
			icon: "figma",
			link: "https://figma.com/",
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: "box",
			id: "1",
			links: [
				{
					name: "Notifications",
					link: "https://github.com/notifications",
				},
				{
					name: "Stars",
					link: "https://github.com/BlueFalconHD?tab=stars",
				},
				{
					name: "Repositories",
					link: "https://github.com/BlueFalconHD?tab=repositories",
				},
				{
					name: "Blog",
					link: "https://github.blog/",
				},
			],
		},
		{
			icon: "briefcase",
			id: "2",
			links: [
				{
					name: "Drive",
					link: "https://drive.google.com/drive/u/0/my-drive",
				},
				{
					name: "Dribbble",
					link: "https://www.dribbble.com",
				},
				{
					name: "Trello",
					link: "https://www.trello.com",
				},
				{
					name: "Slack",
					link: "https://www.slack.com",
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [],
};
