import React, { useEffect } from 'react'
import designer from '../../assets/disiner.jpg'
import ivan from '../../assets/ivan.jpg'
import mark1 from '../../assets/mark1.jpg'
import useFadeIn from '../../hooks/useFadeIn'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './AboutPage.css'

function AboutPage() {
	useFadeIn() // Применяем наблюдатель

	useEffect(() => {
		window.scrollTo(0, 0) // Прокручиваем страницу вверх при загрузке
	}, [])

	return (
		<div className='about-page'>
			<Header />
			<main className='about-content'>
				<section className='company-description fade-in-section'>
					<h1>О нас</h1>
					<p>
						Мы — команда iAM, специализируемся на создании цифровых продуктов,
						которые помогают бизнесу расти. Мы разрабатываем сайты, приложения и
						маркетинговые решения, превращая идеи клиентов в эффективные
						инструменты. Наша цель — ваш успех.
					</p>
				</section>

				<section className='team fade-in-section'>
					<h2>Наша команда</h2>
					<div className='team-member fade-in-section'>
						<div className='member-photo'>
							<img src={mark1} alt='mark1' />
						</div>
						<div className='member-info'>
							<h3>Марк тут будешь ты</h3>
							<p>Роль: Основатель</p>
							<p>
								Я занимаюсь стратегическим управлением и развитием компании. Мой
								опыт включает создание успешных проектов и управление командами
								разработчиков.
							</p>
						</div>
					</div>

					<div className='team-member reverse fade-in-section'>
						<div className='member-photo'>
							<img src={ivan} alt='ivan' />
						</div>
						<div className='member-info'>
							<h3>Ваня будет тут</h3>
							<p>Роль: FullStack-разработчик</p>
							<p>
								Я занимаюсь разработкой веб-приложений, обеспечивая высокое
								качество кода и производительность. Мой опыт включает работу с
								различными технологиями и фреймворками.
							</p>
						</div>
					</div>
					<div className='team-member fade-in-section'>
						<div className='member-photo'>
							<img src={designer} alt='designer' />
						</div>
						<div className='member-info'>
							<h3>Тут ещё кто-то будет</h3>
							<p>Роль: Дизайнер, например</p>
							<p>
								Я занимаюсь UI/UX-дизайном, создаю уникальные интерфейсы и
								брендинг, которые выделяют ваш бизнес среди конкурентов.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default AboutPage
