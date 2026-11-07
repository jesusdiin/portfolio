import React, { useState } from 'react';
import './qualification.css';
import { useLanguage } from '../../i18n/LanguageContext';

// Timeline entries alternate sides: even index → left, odd index → right
const TimelineItem = ({ item, index }) => {
	const content = (
		<div>
			<h3 className="qualification_title">{item.title}</h3>
			<span className="qualification_subtitle">{item.subtitle}</span>
			<div className="qualification_calendar">
				<i className="uil uil-calendar-alt"></i> {item.date}
			</div>
		</div>
	);

	const marker = (
		<div>
			<span className="qualification_rounder"></span>
			<span className="qualification_line"></span>
		</div>
	);

	return (
		<div className="qualification_data">
			{index % 2 === 0 ? (
				<>{content}{marker}</>
			) : (
				<><div></div>{marker}{content}</>
			)}
		</div>
	);
};

const TABS = [
	{ key: 'education', icon: 'uil-graduation-cap', items: 'educationItems' },
	{ key: 'experience', icon: 'uil-briefcase-alt', items: 'experienceItems' },
	{ key: 'achievements', icon: 'uil-trophy', items: 'achievementItems' },
];

function Qualification() {
	const { t } = useLanguage();
	const [active, setActive] = useState(TABS[0].key);
	const activeTab = TABS.find((tab) => tab.key === active);

	return (
		<section className="qualification section">
			<h2 className="section_title">{t('qualification.title')}</h2>
			<span className="section_subtitle">{t('qualification.subtitle')}</span>

			<div className="qualification_container container">
				<div className="qualification_tabs">
					{TABS.map((tab) => (
						<button
							type="button"
							key={tab.key}
							className={tab.key === active ? 'qualification_button qualification_active button--flex' : 'qualification_button button--flex'}
							onClick={() => setActive(tab.key)}
						>
							<i className={`uil ${tab.icon} qualification_icon`}></i> {t(`qualification.${tab.key}`)}
						</button>
					))}
				</div>

				<p className="qualification_description">{t(`qualification.${active}Description`)}</p>

				<div className="qualification_sections">
					<div className="qualification_content qualification_content_active" key={active}>
						{t(`qualification.${activeTab.items}`).map((item, i) => (
							<TimelineItem item={item} index={i} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Qualification;
