import React, { useState } from 'react'
import useFadeIn from '../../hooks/useFadeIn'
import './Contacts.css'

function Contacts() {
	const [formData, setFormData] = useState({
		name: '',
		contact: '',
		description: '',
	})
	const [submitted, setSubmitted] = useState(false)

	useFadeIn()

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		// Telegram Bot API
		const BOT_TOKEN = '7644039066:AAEtYvFDi0t2czczLpjgahcnguyhqr40vts' // Замените на ваш токен
		const CHAT_ID = '-4594398433' // Замените на ваш chat_id
		const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

		// Формируем сообщение
		const message = `
            <b>Новая заявка с сайта:</b>
            Имя: ${formData.name}
            Контакт: ${formData.contact}
            Описание: ${formData.description}
        `

		// Отправляем сообщение в Telegram
		try {
			await fetch(TELEGRAM_API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: message,
					parse_mode: 'HTML',
				}),
			})
			setSubmitted(true)
		} catch (error) {
			console.error('Ошибка при отправке сообщения в Telegram:', error)
		}
	}

	return (
		<section id='contacts' className='contacts fade-in-section'>
				<h2>Готовы обсудить ваш проект?</h2>
				<p>Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>
				{submitted ? (
						<div className='thank-you'>
								<p>Спасибо за заявку! Мы свяжемся с вами в ближайшее время.</p>
						</div>
				) : (
						<form onSubmit={handleSubmit} className='contact-form'>
								<label>
										Имя:
										<input
												type='text'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
										/>
								</label>
								<label>
										Телефон/Email:
										<input
												type='text'
												name='contact'
												value={formData.contact}
												onChange={handleChange}
												required
										/>
								</label>
								<label>
										Описание задачи:
										<textarea
												name='description'
												rows='6'
												value={formData.description}
												onChange={handleChange}
												required
										/>
								</label>
								<button type='submit'>Отправить</button>
						</form>
				)}
				<div className='trust-signals'>
						<p>Конфиденциальность гарантирована. Никакого спама.</p>
				</div>
		</section>
)
}

export default Contacts
