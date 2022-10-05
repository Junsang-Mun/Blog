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

export function postView(data) {
	let modified = data.map(({id}) => ({id}));
	return modified;
}