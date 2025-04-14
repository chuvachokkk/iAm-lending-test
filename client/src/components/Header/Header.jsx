import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { SiTelegram, SiWhatsapp } from 'react-icons/si'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
	const [isBurgerOpen, setBurgerOpen] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false)

	const toggleBurger = () => setBurgerOpen(!isBurgerOpen)
	const closeBurger = () => setBurgerOpen(false)
	const toggleModal = () => setModalOpen(!isModalOpen)
	const closeModal = () => setModalOpen(false)

	return (
		<header className='header'>
			<div className='header__left'>
				<div className='burger-menu' onClick={toggleBurger}>
					<FaBars size={32} />
				</div>
				{isBurgerOpen && (
					<div className='burger-card'>
						<button className='burger-close-btn' onClick={closeBurger}>
							<FaTimes size={16} />
						</button>
						<Link to='/' onClick={closeBurger}>
							Главная
						</Link>
						<Link to='/about' onClick={closeBurger}>
							О нас
						</Link>
						<Link to='/services' onClick={closeBurger}>
							Услуги
						</Link>
						<Link to='/#contacts' onClick={closeBurger}>
							Контакты
						</Link>
					</div>
				)}
			</div>
			<div className='header__center'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='iAM Logo' />
					</Link>
				</div>
			</div>
			<div className='header__right'>
				<div className='contact-circle' onClick={toggleModal}></div>
				{isModalOpen && (
					<div className='contact-modal-overlay' onClick={toggleModal}>
						<div className='contact-modal' onClick={e => e.stopPropagation()}>
							<button className='modal-close-btn' onClick={closeModal}>
								✕
							</button>
							<h3>Свяжитесь с нами</h3>
							<a
								href='https://t.me/Flashnemo666'
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeModal}
							>
								<SiTelegram size={20} />
								<span>Telegram</span>
							</a>
							<a
								href='https://wa.me/+79146840220'
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeModal}
							>
								<SiWhatsapp size={20} />
								<span>WhatsApp</span>
							</a>
							{/* <Link to='/#contacts' onClick={closeModal}>
								<FaEnvelope size={20} />
								<span>Форма заявки</span>
							</Link> */}
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
