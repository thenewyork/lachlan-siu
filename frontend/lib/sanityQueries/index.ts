export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
	}
`;

export const projectsQueryString = `
	*[_type == 'project'] {
		...,
	}
`;