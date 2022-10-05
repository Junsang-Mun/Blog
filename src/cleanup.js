export function postPreview(data) {
	let modified = data.map(({id, properties}) => ({id, properties}))
	return modified;
}

export function postView(data) {
	let modified = data.map(({id}) => ({id}));
	return modified;
}