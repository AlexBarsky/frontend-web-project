export const getLocalStore = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name);
		console.log(JSON.parse(ls!!));

		return ls ? JSON.parse(ls) : null;
	}
	return null;
};
