import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './components/About/About'
import AboutPage from './components/AboutPage/AboutPage'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ServiceGrid from './components/ServiceGrid/ServiceGrid'
import ServicesPage from './components/ServicesPage/ServicesPage'
import Steps from './components/Steps/Steps'
import ThemeContext from './hooks/ThemeContext'
import useFadeIn from './hooks/useFadeIn'
import './index.css'

// Удаляем <Router> из App.jsx, так как он уже оборачивает приложение в main.jsx
function App() {
	useFadeIn() // Применяем наблюдатель ко всем страницам

	const location = useLocation()
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	useEffect(() => {
		window.scrollTo(0, 0) // Прокручиваем страницу вверх при загрузке
	}, [location]) // Добавляем зависимость от изменения маршрута

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={`App ${theme}`}>
				<AnimatePresence mode='wait'>
					<Routes>
						<Route
							path='/'
							element={
								<div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Header />
									<Hero />
									<ServiceGrid />
									<Steps />
									<About />
									<Contacts />
									<Footer />
								</div>
							}
						/>
						<Route path='/about' element={<AboutPage />} />
						<Route path='/services' element={<ServicesPage />} />
					</Routes>
				</AnimatePresence>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
