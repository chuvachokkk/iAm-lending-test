import React from 'react'
import { SiTelegram, SiWhatsapp } from 'react-icons/si' // Добавлен импорт SiWhatsapp
import useFadeIn from '../../hooks/useFadeIn'
import './Footer.css'

function Footer() {
	useFadeIn()

	return (
		<footer className='footer fade-in-section'>
			<p>© 2025 iAM. Все права защищены.</p>
			<div className='socials'>
				<a
					href='https://t.me/Flashnemo666'
					target='_blank'
					rel='noopener noreferrer'
				>
					<SiTelegram size={28} color='#0088cc' />
				</a>
				<a
					href='https://wa.me/+79146840220' // Замените на ваш номер телефона
					target='_blank'
					rel='noopener noreferrer'
				>
					<SiWhatsapp size={28} color='#25D366' />
				</a>
			</div>
		</footer>
	)
}

export default Footer
