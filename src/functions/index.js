export const getCookies = () => {
	return document.cookie.split("; ").map(cookie => {
		const [key, value] = cookie.split("=");
		return { key, value };
	});
}

export const getRole = () => {
	const cookies = getCookies();
	return cookies.filter(cookie => cookie.key === "loggedin")[0]?.value.split("-")[0];
}

export const getId = () => {
	const cookies = getCookies();
	return cookies.filter(cookie => cookie.key === "loggedin")[0]?.value.split("-")[1];
}

export const isLoggedIn = () => {
	return getRole() ? true : false;
}