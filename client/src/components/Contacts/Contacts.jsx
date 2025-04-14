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

	const handleSubmit = e => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = {
			name: formData.get('name'),
			contact: formData.get('contact'),
			description: formData.get('description'),
		}
		console.log('Form submitted:', formData)
		setSubmitted(true)
	}

	return (
		<section id='contacts' className='contacts fade-in-section'>
			<h2>Готовы обсудить ваш проект?</h2>
			<p>Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>
			{!submitted ? (
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
							rows='6' // Начальная высота
							style={{ resize: 'vertical' }}
							required
						/>
					</label>
					<button type='submit'>Отправить</button>
				</form>
			) : (
				<div className='thank-you'>
					<p>Спасибо за заявку! Мы ответим вам в течение часа.</p>
				</div>
			)}
			<div className='trust-signals'>
				<p>Конфиденциальность гарантирована. Никакого спама.</p>
			</div>
		</section>
	)
}

export default Contacts
