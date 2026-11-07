import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import './reveal.css';

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `is-visible` once the element scrolls into view.
 * The animation itself lives in reveal.css and is chosen with a variant class
 * (`reveal--stagger`, `reveal--timeline`).
 */
const Reveal = forwardRef(function Reveal({ as: Tag = 'div', className = '', children, ...rest }, forwardedRef) {
	const nodeRef = useRef(null);
	const [visible, setVisible] = useState(false);

	// Keep our own ref and also hand the node to the parent (e.g. the skills carousel)
	const setRefs = useCallback((node) => {
		nodeRef.current = node;
		if (typeof forwardedRef === 'function') forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);

	useEffect(() => {
		const node = nodeRef.current;
		if (!node) return undefined;

		if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
			setVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<Tag ref={setRefs} className={`reveal ${className}${visible ? ' is-visible' : ''}`} {...rest}>
			{children}
		</Tag>
	);
});

export default Reveal;
