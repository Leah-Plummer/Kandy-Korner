import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { AppViews } from "./views/AppViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./App.css"
import { useState, useEffect } from "react"


export const KandyKorner = () => {

const [products, setProducts] = useState([])
const [productTypes, setProductTypes] = useState([])


useEffect(() => {
	fetch('http://localhost:8088/products')
	.then((response) => response.json())
	.then((data) => { 
		setProducts(data)
	})
}, []
)
useEffect(() => {
	fetch('http://localhost:8088/productTypes')
	.then((response) => response.json())
	.then((data) => { 
		setProductTypes(data)
	})
}, []
)
	


	return (
		<>
		
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route path="*" element={
					<Authorized>
						<>
							<NavBar />
							<AppViews />
						</>
					</Authorized>

				} />
			</Routes>
		</>
	)
}