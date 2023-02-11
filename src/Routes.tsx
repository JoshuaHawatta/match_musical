import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const PagesRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>Hello world!</h1>} />
			<Route path='/anotherPage' element={<h1>Hello world from another page!</h1>} />
			<Route path='*' element={<h1>Page not found!</h1>} />
		</Routes>
	)
}
