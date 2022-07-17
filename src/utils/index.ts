import type { ICalculateExperience } from './index.types';

export const calculateMonthAndYearDifference = (fromDate: Date, toDate: Date): [number, number] => {
	const differenceInYears = toDate.getFullYear() - fromDate.getFullYear();
	const differenceInMonths = toDate.getMonth() - fromDate.getMonth();
	if (differenceInMonths >= 0) return [differenceInYears, differenceInMonths];
	return [differenceInYears - 1, 12 + differenceInMonths];
};

export const calculateExperience = (): ICalculateExperience => {
	const unprofessionalExperience = new Date(2016, 2);
	const internshipExperience = new Date(2019, 4);
	const professionalExperience = new Date(2021, 7);
	const today = new Date();
	return {
		unprofessional: calculateMonthAndYearDifference(unprofessionalExperience, today),
		internship: calculateMonthAndYearDifference(internshipExperience, today),
		professional: calculateMonthAndYearDifference(professionalExperience, today)
	};
};

export const getUserNameAndRepoFromLink = (githubLink: string) => {
	const linkWithoutGithub = githubLink.replace('https://github.com/', '');
	const params = linkWithoutGithub.split('/');
	return {
		userName: params[0],
		repoName: params[1]
	};
};
export const getFormattedDate = (date: string) => {
	const dateObj = new Date(date);
	const todayDate = new Date();
	const monthMap = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const day = dateObj.getDate();
	const month = dateObj.getMonth();
	const year = dateObj.getFullYear();
	if (todayDate.getFullYear() !== year) {
		return `${day} ${monthMap[month]}, ${year}`;
	}
	return `${day} ${monthMap[month]}`;
};
