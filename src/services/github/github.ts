import { getUserNameAndRepoFromLink } from '../../utils';
import { http } from '../http';

const GITHUB_API_BASE_URL = 'https://api.github.com/';
export const getRepositoryDetails = (githubLink) => {
	const { repoName, userName } = getUserNameAndRepoFromLink(githubLink);
	return http.get(`${GITHUB_API_BASE_URL}repos/${userName}/${repoName}`, {
		headers: { Accept: 'application/vnd.github.v3+json' }
	});
};

export const getRepositoryLanguages = (githubLink) => {
	const { repoName, userName } = getUserNameAndRepoFromLink(githubLink);
	return http.get(`${GITHUB_API_BASE_URL}repos/${userName}/${repoName}/languages`, {
		headers: { Accept: 'application/vnd.github.v3+json' }
	});
};
