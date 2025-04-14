import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './components/About/About'
import AboutPage from './components/AboutPage/AboutPage'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ServiceGrid from './components/ServiceGrid/ServiceGrid'
import ServicesPage from './components/ServicesPage/ServicesPage'
import Steps from './components/Steps/Steps'
import useFadeIn from './hooks/useFadeIn'
import './index.css'

function App() {
	useFadeIn() // Применяем наблюдатель ко всем страницам

	useEffect(() => {
		window.scrollTo(0, 0) // Прокручиваем страницу вверх при загрузке
	}, [])

	return (
		<Router basename='/iAm-lending-test'>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Header />
								<Hero />
								<ServiceGrid />
								<Steps />
								<About />
								{/* <Portfolio /> */}
								{/* <Reviews /> */}
								<Contacts />
								<Footer />
							</>
						}
					/>
					<Route path='/about' element={<AboutPage />} />
					<Route path='/services' element={<ServicesPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
