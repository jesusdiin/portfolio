import React, {useState} from 'react';
import './services.css';
import { useLanguage } from '../../i18n/LanguageContext';

const SERVICES = [
	{ id: 1, key: 'web', icon: 'uil-web-grid' },
	{ id: 2, key: 'software', icon: 'uil-edit' },
];

const  Services = () => {
	const { t } = useLanguage();

	const [toggleState, setToggleState] = useState(0);
	const toggleTab = (index) => {
		setToggleState(index)
	}

	return (
		<section className="services section" id="services">
			<h2 className="section_title">{t('services.title')}</h2>
			<span className="section_subtitle">{t('services.subtitle')}</span>

			<div className="services_container container grid">
				{SERVICES.map(({ id, key, icon }) => {
					const title = t(`services.${key}.title`);
					// Card titles break after the first word so they fit the card width
					const [first, ...rest] = title.split(' ');

					return (
						<div className="services_content" key={key}>
							<div>
								<i className={`uil ${icon} services_icon`}></i>
								<h3 className="services_title">
									{first} <br /> {rest.join(' ')}
								</h3>
							</div>

							<span className="services_button" onClick={() => toggleTab(id)}>
								{t('services.viewMore')} <i className="uil uil-arrow-right services_button_icon"></i>
							</span>

							<div className={toggleState === id ? 'services_modal active_modal' : 'services_modal'}>
								<div className="services_modal_content">
									<i onClick={() => toggleTab(0)} className="uil uil-times services_modal_close"></i>
									<h3 className="services_modal_title">{title}</h3>
									<p className="services_modal_description">{t('services.modalDescription')}</p>

									<ul className="services_modal_services grid">
										{t(`services.${key}.items`).map((item) => (
											<li className="services_modal_service" key={item}>
												<i className="uil uil-check-circle services_modal_icon"></i>
												<p className="services_modal_info">{item}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	)
}

export default Services;
