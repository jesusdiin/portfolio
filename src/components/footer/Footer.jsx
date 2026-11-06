import React from 'react';
import './footer.css';
import { useLanguage } from '../../i18n/LanguageContext';

function Footer() {
	const { t } = useLanguage();

	return (
			<footer className="footer">
				<div className="footer_container container">
					<h1 className="footer_title">Jesús</h1>

					<ul className="footer_list">
						<li>
							<a href="#about" className="footer_link">{t('footer.about')}</a>
						</li>

						<li>
							<a href="#portfolio" className="footer_link">{t('footer.projects')}</a>
						</li>
						
						<li>
							<a href="#testimonials" className="footer_link">{t('footer.testimonials')}</a>
						</li>
					</ul>

					<div className="footer_social">
						<a href="https://www.instagram.com/jesus.diin" className="footer_social_link" target='_blank'>
							<i className="bx bxl-instagram"></i>
						</a>
			
						<a href="https://www.linkedin.com/in/jesusdiin" className="footer_social_link" target='_blank'>
							<i className="bx bxl-linkedin"></i>
						</a>
			
						<a href="https://github.com/jesusdiin" className="footer_social_link" target='_blank'>
							<i className="bx bxl-github"></i>
						</a>						
					</div>

					<span className='footer_copy'>Jesús Hernández</span>

				</div>
			</footer>
		)
}

export default Footer