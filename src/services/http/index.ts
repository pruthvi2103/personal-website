export const http = {
	get: async (url: string, params: RequestInit) => {
		const res = await fetch(url, params);
		const resJson = await res.json();
		return resJson;
	}
};
