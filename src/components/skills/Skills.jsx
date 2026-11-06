import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css';
import { useLanguage } from '../../i18n/LanguageContext';

function Skills() {
	const { t } = useLanguage();

	return (
		<section className="skills section" id="skills">
			<h2 className="section_title">{t('skills.title')}</h2>
			<span className="section_subtitle">{t('skills.subtitle')}</span>

			<div className="skills_container container grid">
				<Frontend />
				<Backend />
			</div>
		</section>
	)
}

export default Skills;
