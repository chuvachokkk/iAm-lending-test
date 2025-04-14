import React, { useState } from 'react'
import useFadeIn from '../../hooks/useFadeIn'
import './ServiceGrid.css'

const serviceCards = [
	{
		title: 'Веб-разработка',
		subservices: [
			{
				name: 'Лендинг',
				description: 'Одностраничный сайт для быстрой конверсии.',
			},
			{
				name: 'Многостраничный',
				description: 'Полноценный сайт с каталогами и разделами.',
			},
			{
				name: 'Онлайн-магазин',
				description: 'E-commerce с корзиной и онлайн-оплатой.',
			},
			{
				name: 'Индивидуальная разработка',
				description: 'Уникальные решения под ваши задачи.',
			},
		],
	},
	{
		title: 'Дизайн',
		subservices: [
			{
				name: 'UI/UX',
				description: 'Удобные интерфейсы с учетом пользовательского опыта.',
			},
			{
				name: 'Прототипирование',
				description: 'Интерактивные прототипы для проверки идей.',
			},
			{
				name: 'Брендинг',
				description: 'Логотипы и фирменный стиль для узнаваемости.',
			},
		],
	},
	{
		title: 'Маркетинг',
		subservices: [
			{
				name: 'SEO',
				description: 'Оптимизация сайта для роста органического трафика.',
			},
			{
				name: 'Таргет',
				description: 'Реклама в соцсетях на целевую аудиторию.',
			},
			{
				name: 'Контекст',
				description: 'Реклама в Google Ads и Яндекс.Директ.',
			},
		],
	},
	{
		title: 'Мобильные приложения',
		subservices: [
			{ name: 'iOS', description: 'Приложения для iPhone и iPad.' },
			{ name: 'Android', description: 'Приложения для Android-устройств.' },
			{
				name: 'Кроссплатформа',
				description: 'Разработка на Flutter или React Native.',
			},
		],
	},
]

function ServiceCard({ card }) {
	const [hoveredSubservice, setHoveredSubservice] = useState(null)

	return (
		<div className='service-card fade-in-section'>
			<h3>{card.title}</h3>
			<div className='service-card-content'>
				<div className='service-options'>
					{card.subservices.map((sub, idx) => (
						<button
							key={idx}
							className='service-option-btn'
							onMouseEnter={() => setHoveredSubservice(sub)}
							onMouseLeave={() => setHoveredSubservice(null)}
						>
							{sub.name}
						</button>
					))}
				</div>
				<div className='service-description'>
					{hoveredSubservice ? hoveredSubservice.description : 'наведи курсор'}
				</div>
			</div>
		</div>
	)
}

function ServiceGrid() {
	useFadeIn()

	return (
		<section className='service-grid-section fade-in-section'>
			<h2>Наши услуги</h2>
			<div className='service-grid'>
				{serviceCards.map((card, index) => (
					<ServiceCard key={index} card={card} />
				))}
			</div>
		</section>
	)
}

export default ServiceGrid
