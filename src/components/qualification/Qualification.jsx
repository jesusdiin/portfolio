import React, {useState} from 'react';
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

function Qualification() {
	const { t } = useLanguage();

	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	}

	return (
		<section className="qualification section">
			<h2 className="section_title">{t('qualification.title')}</h2>
			<span className="section_subtitle">{t('qualification.subtitle')}</span>

			<div className="qualification_container container">
				<div className="qualification_tabs">
					<div className={toggleState === 1 ? "qualification_button qualification_active button--flex": "qualification_button button--flex"}
					onClick={() => toggleTab(1)}
					>
						<i className="uil uil-graduation-cap qualification_icon"></i> {t('qualification.education')}
					</div>

					<div className={toggleState === 2 ? "qualification_button qualification button--flex": "qualification_button button--flex"}
					onClick={() => toggleTab (2)}
					>
						<i className="uil uil-briefcase-alt qualification_icon"></i>
						{t('qualification.experience')}
					</div>
				</div>

				<div className="qualification_sections">
					<div className={toggleState === 1 ? "qualification_content qualification_content_active" : "qualification_content"}>
						{t('qualification.educationItems').map((item, i) => (
							<TimelineItem item={item} index={i} key={i} />
						))}
					</div>

					<div className={toggleState === 2 ? "qualification_content qualification_content_active" : "qualification_content"}>
						{t('qualification.experienceItems').map((item, i) => (
							<TimelineItem item={item} index={i} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification;
