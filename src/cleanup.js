export function postPreview(data) {
	let result = {
		"posts": [],
		"next_cursor": data.next_cursor,
		"has_more": data.has_more
	}
	for(let i in data.results) {
		let item = data.results[i];
		let id, title, tag, preview;
		if (item.id) {
			id = item.id;
		} else {
			id = '';
		}
		if (item.properties.title) {
			title = item.properties.title.title[0].plain_text;
		} else {
			title = '';
		}
		if (item.properties.tag.select) {
			tag = item.properties.tag.select.name;
		} else {
			tag = 'no tag';
		}
		if (item.properties.preview.rich_text[0]) {
			preview = item.properties.preview.rich_text[0].plain_text;
		} else {
			preview = '';
		}
		result.posts.push({
			"id": id,
			"title": title,
			"tag": tag,
			"preview": preview
		});
	}
	return result;
}

export function postMetadata(data) {
	let result = {};

	if (data.icon) {
		result.icon = data.icon;
	}
	if (data.properties.tag.select) {
		result.tag = data.properties.tag.select.name;
	}
	if (data.properties.title.title[0]) {
		result.title = data.properties.title.title[0].plain_text;
	}
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