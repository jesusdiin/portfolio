import React, { useState } from 'react';
import './header.css';
import { useLanguage } from '../../i18n/LanguageContext';

const NAV_ITEMS = [
    { href: '#home', icon: 'uil-estate', key: 'home' },
    { href: '#about', icon: 'uil-user', key: 'about' },
    { href: '#services', icon: 'uil-briefcase-alt', key: 'services' },
    { href: '#skills', icon: 'uil-file-alt', key: 'skills' },
    { href: '#portfolio', icon: 'uil-scenery', key: 'portfolio' },
    { href: '#contact', icon: 'uil-message', key: 'contact' },
];

const Header = () => {
    const { lang, toggleLang, t } = useLanguage();

	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		if (this.scrollY >= 80) header.classList.add('show_header');
		else header.classList.remove('scroll_header')
	});

    /* ===== Breackpoint ===== */
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActive] = useState("#home");


    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='/' className='nav_logo'>Jesús</a>

                <div className={Toggle ? 'nav_menu show_menu' : 'nav_menu'}>
                    <ul className='nav_list grid'>
                        {NAV_ITEMS.map(({ href, icon, key }) => (
                            <li className='nav_item' key={key}>
                                <a href={href} onClick={() => setActive(href)} className={activeNav === href ? 'nav_link active_link' : 'nav_link'}>
                                    <i className={`uil ${icon} nav_icon`}></i> {t(`nav.${key}`)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>

                </div>

                <div className="nav_actions">
                    <button
                        type="button"
                        className="nav_lang"
                        onClick={toggleLang}
                        aria-label={t('nav.language')}
                        title={t('nav.language')}
                    >
                        <span className={lang === 'en' ? 'nav_lang_option nav_lang_active' : 'nav_lang_option'}>EN</span>
                        <span className="nav_lang_divider">|</span>
                        <span className={lang === 'es' ? 'nav_lang_option nav_lang_active' : 'nav_lang_option'}>ES</span>
                    </button>

                    <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Header;
