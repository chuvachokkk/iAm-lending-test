// src/hooks/useFadeIn.js
import { useEffect } from 'react'

const useFadeIn = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible')
						obs.unobserve(entry.target) // Останавливаем наблюдение
					}
				})
			},
			{ threshold: 0.1 } // Порог видимости
		)

		const elements = document.querySelectorAll('.fade-in-section')
		elements.forEach(el => {
			if (!el.classList.contains('is-visible')) {
				observer.observe(el)
			}
		})

		return () => observer.disconnect() // Очищаем наблюдатель
	}, [])
}

export default useFadeIn
