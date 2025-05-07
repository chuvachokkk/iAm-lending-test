import React, { useState } from 'react'
import useFadeIn from '../../hooks/useFadeIn'
import './Steps.css'

const stepsData = [
	{
		title: 'Инициация проекта',
		description: 'Старт проекта и формирование команды.',
		details: [
			'Сбор первичных требований',
			'Формирование проектной команды',
			'Утверждение бюджета и сроков',
		],
	},
	{
		title: 'Анализ и планирование',
		description:
			'Анализируем ваши цели, изучаем рынок и разрабатываем стратегию проекта.',
		details: [
			'Определение целей и задач проекта',
			'Анализ рынка и конкурентов',
			'Разработка стратегии и плана реализации',
		],
	},
	{
		title: 'Дизайн и прототипирование',
		description: 'Создаем уникальный дизайн и прототипы для визуализации идей.',
		details: [
			'Разработка концепции дизайна',
			'Создание макетов и прототипов',
			'Согласование с заказчиком и корректировка',
		],
	},
	{
		title: 'Подготовка к разработке',
		description: 'Готовим техническую базу и спецификации.',
		details: [
			'Разработка технического задания',
			'Выбор технологий и инструментов',
			'Настройка среды разработки',
		],
	},
	{
		title: 'Разработка и тестирование',
		description:
			'Разрабатываем продукт с использованием современных технологий и тестируем его.',
		details: [
			'Программирование и интеграция систем',
			'Юнит-тестирование и исправление ошибок',
			'Проведение интеграционных тестов',
		],
	},
	{
		title: 'Контроль качества',
		description: 'Проверяем продукт на соответствие требованиям.',
		details: [
			'Тестирование usability',
			'Проверка производительности',
			'Исправление финальных недочетов',
		],
	},
	{
		title: 'Запуск и поддержка',
		description:
			'Запускаем проект и обеспечиваем его сопровождение и развитие.',
		details: [
			'Развертывание проекта на сервере',
			'Мониторинг работы и оптимизация',
			'Техническая поддержка и обновления',
		],
	},
]

function Steps() {
	const [activeStep, setActiveStep] = useState({})

	useFadeIn()

	const toggleStep = index => {
		setActiveStep(prevActiveStep => {
			const newActiveSteps = { ...prevActiveStep }
			if (newActiveSteps[index]) {
				delete newActiveSteps[index]
			} else {
				newActiveSteps[index] = true
			}
			return newActiveSteps
		})
	}

	return (
		<section className='steps-section fade-in-section'>
			<div className='steps-container'>
				<div className='steps-title'>
					<h2>Этапы работы</h2>
					<div className='title-decor'></div>
				</div>
				<div className='steps-content'>
					{stepsData.map((step, index) => (
						<div
							key={index}
							className={`step-card ${activeStep[index] ? 'active' : ''}`}
							onClick={() => toggleStep(index)}
						>
							<h3 className='step-title'>{step.title}</h3>
							{activeStep[index] && (
								<>
									<p>{step.description}</p>
									{step.details && (
										<ul className='step-details'>
											{step.details.map((detail, idx) => (
												<li key={idx}>{detail}</li>
											))}
										</ul>
									)}
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Steps
