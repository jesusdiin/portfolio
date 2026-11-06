import React from 'react'
import { useLanguage } from '../../i18n/LanguageContext';

function Info() {
	const { t } = useLanguage();

	return (
		<div className="about_info grid">
			<div className="about_box">
				<i className="bx bx-award about_icon"></i>
				<h3 className="about_title">{t('about.experience')}</h3>
				<span className="about_subtitle">{t('about.experienceValue')}</span>
			</div>

			<div className="about_box">
				<i className="bx bx-briefcase-alt about_icon"></i>
				<h3 className="about_title">{t('about.completed')}</h3>
				<span className="about_subtitle">{t('about.completedValue')}</span>
			</div>

			<div className="about_box">
				<i className="bx bx-rocket about_icon"></i>
				<h3 className="about_title">{t('about.e2e')}</h3>
				<span className="about_subtitle">{t('about.e2eValue')}</span>
			</div>
		</div>
	)
}

export default Info
