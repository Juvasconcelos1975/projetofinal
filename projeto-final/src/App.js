import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import Contact from './Contact/Contact';
import Tempo from './Tempo/Tempo';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<Main />} />
					<Route path='/about' element={<About />} />
					
				</Routes>
			</div>
		</Router>
	);
}

export default App;
