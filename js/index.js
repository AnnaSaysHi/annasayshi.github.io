
const INDEX = 
[
	{
		"groupName": "Home",
		"name": "Anna says hi's Github pages",
		"single": true,
		"path": "/",
		"type": "site",
		"url": "index"
	},

	{
		"noItem": true, // hiding it until I find any purpose for it

		"groupName": "News",
		"name": "News and stuff",
		"single": true,
		"path": "news/",
		"type": "blog",
		"url": 7,
		"max": 5
	},

	{
		"groupName": "ShmupCC tutorial",
		"name": "ShmupCC tutorial",
		"single": true,
		"path": "shmupCC-tutorial/",
		"type": "blog",
		"url": 5,
		"max": 1,
		"reverse": true,
		"noItem": true
	},
	// soon
	{
		"groupName": "ShmupCC",
		"path": "shmupCC/",
		"content":[
			{
				"name": "ShmupCC Tutorial",
				"type": "href",
				"url": "#b=shmupCC-tutorial/&p=1"
			},
			{
				"name": "ShmupCC method list",
				"type": "site",
				"url": "methods"
			}
			]

	},
	{
		"groupName": "Links",
		"path": null,
		"content": [
			{
				"name": "ZUNcode Discord",
				"type": "href",
				"newTab": true,
				"url": "https://discord.gg/fvPJvHJ"
			},
			{
				"name": "My Github",
				"type": "href",
				"newTab": true,
				"url": "https://github.com/AnnaSaysHi"
			},
      {
				"name": "Priw8's site",
				"type": "href",
				"url": "https://priw8.github.io/"
			},
			{
				"name": "ExpHP's site",
				"type": "href",
				"url": "https://exphp.github.io/thpages/"
			},
			{
				"name": "Maribel's site",
				"type": "href",
				"newTab": true,
				"url": "https://maribelhearn.com/"
			}
		]
	}
]

const DEFAULT = "default";

const ERROR = `
# An error has occured when loading the page.
Try reloading using **CTRL+F5**, or **clearing browser cache** of this site.  
`;

const BLOG_ERROR = `
### An error has occured when loading this content.
`;

const EMBED_LOAD_ERROR = `
Failed to load embedded content.  
HTTP status code: %code%
`;
