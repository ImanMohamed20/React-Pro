import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import Header from './components/Header.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div>
		<Header/>

			<Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/products" element={<Products />}></Route>
			<Route path='/products/:productsId' element={<SingleProduct />}></Route>
			<Route path='*' element={<Error />}></Route>
			
			</Routes>



		</div>
	);
}

export default App;
