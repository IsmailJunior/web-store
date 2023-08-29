import { Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { LandingPage } from './pages/LandingPage'
import { StorePage } from './pages/StorePage'
import {ProductPage} from './pages/ProductPage'
function App ()
{
	return (
		<Routes>
			<Route path='/' element={ <Layout /> }>
				<Route index element={ <LandingPage /> } />
				<Route path='store' element={ <StorePage /> } />
				<Route path='store/:product' element={<ProductPage />} />
			</Route>
		</Routes>
	)
}

export default App;