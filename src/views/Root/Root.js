import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Root.module.scss'

import AplicationPage from '../AplicationPage/AplicationPage'
import AboutUs from '../AboutUs/AboutUs'

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<AplicationPage />} />
					<Route path='/aboutus' element={<AboutUs />} />
				</Routes>
			</BrowserRouter>
		)
	}
}

export default Root
