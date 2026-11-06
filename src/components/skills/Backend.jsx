import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext';

const GROUPS = [
	[
		{ name: 'Python', level: 'intermediate' },
		{ name: 'Postgres', level: 'basic' },
		{ name: 'Django', level: 'intermediate' },
	],
	[
		{ name: 'NodeJs', level: 'intermediate' },
		{ name: 'MySQL', level: 'basic' },
		{ name: 'Firebase', level: 'basic' },
	],
];

function Backend() {
	const { t } = useLanguage();

	return (
		<div className="skills_content">
			<h3 className="skills_title">{t('skills.backend')}</h3>

			<div className="skills_box">
				{GROUPS.map((group, i) => (
					<div className="skills_group" key={i}>
						{group.map(({ name, level }) => (
							<div className="skills_data" key={name}>
								<i className="bx bx-badge-check"></i>
								<div>
									<h3 className="skills_name">{name}</h3>
									<span className="skills_level">{t(`skills.${level}`)}</span>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Backend
