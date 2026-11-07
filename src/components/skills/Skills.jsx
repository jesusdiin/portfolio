import React, { useEffect, useRef, useState } from 'react';
import './skills.css';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../reveal/Reveal';

// Icon names from translations → Boxicons classes
const ICONS = {
	monitor: 'bx-desktop',
	server: 'bx-server',
	smartphone: 'bx-mobile-alt',
	database: 'bx-data',
	'brain-circuit': 'bx-brain',
	cloud: 'bx-cloud',
};

// Category shown first in the mobile carousel (Backend Development)
const INITIAL_INDEX = 1;

function Skills() {
	const { t } = useLanguage();
	const categories = t('skills.categories');

	// Mobile carousel: track which card is in view and let the dots jump to a card
	const containerRef = useRef(null);
	const [active, setActive] = useState(INITIAL_INDEX);

	const getStep = () => {
		const container = containerRef.current;
		const card = container?.firstElementChild;
		if (!card) return 0;
		const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
		return card.offsetWidth + gap;
	};

	const handleScroll = () => {
		const step = getStep();
		if (!step) return;
		const index = Math.round(containerRef.current.scrollLeft / step);
		setActive(Math.min(Math.max(index, 0), categories.length - 1));
	};

	const goTo = (index, behavior = 'smooth') => {
		containerRef.current?.scrollTo({ left: index * getStep(), behavior });
	};

	// Start the mobile carousel on Backend (index 1). On desktop the grid doesn't scroll, so this is a no-op.
	useEffect(() => {
		goTo(INITIAL_INDEX, 'auto');
		setActive(INITIAL_INDEX);
	}, []);

	return (
		<section className="skills section" id="skills">
			<h2 className="section_title">{t('skills.title')}</h2>
			<span className="section_subtitle skills_subtitle">{t('skills.subtitle')}</span>
			<p className="skills_description container">{t('skills.description')}</p>

			<Reveal className="skills_container container grid reveal--stagger" ref={containerRef} onScroll={handleScroll}>
				{categories.map((category) => (
					<div className="skills_card" key={category.icon}>
						<div className="skills_header">
							<i className={`bx ${ICONS[category.icon] || 'bx-code-alt'} skills_icon`}></i>
							<h3 className="skills_title">{category.title}</h3>
						</div>

						<ul className="skills_chips">
							{category.items.map((item) => (
								<li className="skills_chip" key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</Reveal>

			<div className="skills_dots">
				{categories.map((category, i) => (
					<button
						type="button"
						key={category.icon}
						className={i === active ? 'skills_dot skills_dot_active' : 'skills_dot'}
						aria-label={category.title}
						onClick={() => goTo(i)}
					></button>
				))}
			</div>
		</section>
	);
}

export default Skills;
