import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext';

const GROUPS = [
	[
		{ name: 'HTML', level: 'basic' },
		{ name: 'CSS', level: 'intermediate' },
		{ name: 'JavaScript', level: 'intermediate' },
	],
	[
		{ name: 'Tailwind', level: 'basic' },
		{ name: 'Bootstrap', level: 'intermediate' },
		{ name: 'React', level: 'basic' },
	],
	[
		{ name: 'Vue', level: 'intermediate' },
		{ name: 'Svelte', level: 'basic' },
	],
];

function Frontend() {
	const { t } = useLanguage();

	return (
		<div className="skills_content">
			<h3 className="skills_title">{t('skills.frontend')}</h3>

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

export default Frontend
