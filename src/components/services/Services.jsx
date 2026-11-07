import React, { useEffect, useState } from 'react';
import './services.css';
import { useLanguage } from '../../i18n/LanguageContext';
import Reveal from '../reveal/Reveal';

const SERVICES = [
	{ key: 'web', icon: 'bx bx-globe' },
	{ key: 'multiplatform', icon: 'bx bx-devices' },
	{ key: 'software', icon: 'bx bx-sitemap' },
	{ key: 'ai', icon: 'bx bx-brain' },
	{ key: 'devops', icon: 'bx bx-server' },
];

const Services = () => {
	const { t } = useLanguage();
	// `selected` keeps the last service so the modal content stays rendered while it fades out.
	// Start with the first service so the content is mounted (hidden) before the first open,
	// which lets the entrance transition run every time.
	const [selected, setSelected] = useState(SERVICES[0]);
	const [open, setOpen] = useState(false);

	const openModal = (service) => {
		setSelected(service);
		setOpen(true);
	};
	const close = () => setOpen(false);

	// Close the modal with Escape
	useEffect(() => {
		if (!open) return undefined;
		const onKeyDown = (e) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open]);

	return (
		<section className="services section" id="services">
			<h2 className="section_title">{t('services.title')}</h2>
			<span className="section_subtitle">{t('services.subtitle')}</span>

			<Reveal className="services_container container grid reveal--stagger">
				{SERVICES.map((service) => (
					<button
						type="button"
						className="services_card"
						key={service.key}
						onClick={() => openModal(service)}
					>
						<i className={`${service.icon} services_icon`}></i>
						<h3 className="services_title">{t(`services.${service.key}.title`)}</h3>
						<p className="services_summary">{t(`services.${service.key}.summary`)}</p>
						<span className="services_button">
							{t('services.viewMore')} <i className="uil uil-arrow-right services_button_icon"></i>
						</span>
					</button>
				))}
			</Reveal>

			<div
				className={open ? 'services_modal active_modal' : 'services_modal'}
				onClick={close}
				aria-hidden={!open}
			>
				{selected && (
					<div
						className="services_modal_content"
						role="dialog"
						aria-modal="true"
						aria-labelledby="services-modal-title"
						onClick={(e) => e.stopPropagation()}
					>
						<button type="button" className="services_modal_close" onClick={close} aria-label="Close">
							<i className="uil uil-times"></i>
						</button>

						<i className={`${selected.icon} services_modal_header_icon`}></i>
						<h3 className="services_modal_title" id="services-modal-title">
							{t(`services.${selected.key}.title`)}
						</h3>
						<p className="services_modal_description">{t('services.modalDescription')}</p>

						<ul className="services_modal_services grid">
							{t(`services.${selected.key}.items`).map((item) => (
								<li className="services_modal_service" key={item}>
									<i className="uil uil-check-circle services_modal_icon"></i>
									<p className="services_modal_info">{item}</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</section>
	);
};

export default Services;
