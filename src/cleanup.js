export function postPreview(data) {
	let result = {
		"posts": [],
		"next_cursor": data.next_cursor,
		"has_more": data.has_more
	}
	for(let i in data.results) {
		let item = data.results[i];
		result.posts.push({
			"id": item.id,
			"title": item.properties.title.title[0].plain_text,
			"tag": item.properties.tag.select.name,
			"preview": item.properties.preview.rich_text[0].plain_text
		});
	}
	return result;
}

export function postMetadata(data) {
	let result = {};

	result.icon = data.icon;
	result.tag = data.properties.tag.select.name;
	result.title = data.properties.title.title[0].plain_text;
	return result;
}

export function postView(data) {
	let bodyData = '';
	for (let i in data.results) {
		const body = data.results[i];
		const type = body.type;
		if (body[(type)].rich_text) {
			switch(type) {
				case 'heading_1':
					bodyData += `<h1>${body[(type)].rich_text[0].plain_text}</h1>`;
					break;
				case 'heading_2':
					bodyData += `<h2>${body[(type)].rich_text[0].plain_text}</h2>`;
					break;
				case 'heading_3':
					bodyData += `<h3>${body[(type)].rich_text[0].plain_text}</h3>`;
					break;
				case 'paragraph':
					if (body[(type)].rich_text[0] !== undefined) {
						bodyData += `<p>${body[(type)].rich_text[0].plain_text}</p>`;
						break;
					} else {
						bodyData += "<br>";
						break;
					}
				case 'bulleted_list_item':
					bodyData += `<p>　⁍ ${body[(type)].rich_text[0].plain_text}</p>`;
					break;
			}
		} else if (type === "divider") {
			bodyData += "<hr />"
		}
	}
	let result = {
		"body": bodyData,
		"next_cursor": data.next_cursor,
		"has_more": data.has_more
	}
	return result;
}