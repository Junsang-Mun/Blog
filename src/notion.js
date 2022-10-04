import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export default async function lookupDB() {
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

	const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options);
	const result = await response.json();
	console.log(result);
}