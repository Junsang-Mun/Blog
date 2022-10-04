import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export function retrieveDatabase() {
	const options = {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			'Notion-Version': '2022-06-28',
			authorization: `Bearer ${process.env.NOTION_TOKEN}`
		},
		body: JSON.stringify({
			page_size: 100
		})
	};

	fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.log(err));
}