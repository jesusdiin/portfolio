import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import translations from './translations';

const SUPPORTED = ['en', 'es'];
const STORAGE_KEY = 'lang';

const LanguageContext = createContext(null);

const getInitialLang = () => {
	const stored = localStorage.getItem(STORAGE_KEY);
	return SUPPORTED.includes(stored) ? stored : 'en';
};

const resolve = (obj, path) => path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState(getInitialLang);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.lang = lang;
	}, [lang]);

	const t = useCallback(
		(path) => resolve(translations[lang], path) ?? resolve(translations.en, path) ?? path,
		[lang]
	);

	const toggleLang = useCallback(() => setLang((l) => (l === 'en' ? 'es' : 'en')), []);

	return (
		<LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
