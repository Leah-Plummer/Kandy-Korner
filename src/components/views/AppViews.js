import { LocationsList } from "../locations/LocationsList.js"
import { Routes, Route, Outlet } from "react-router-dom"
import { Products } from "../products/Products"
import { AddProduct } from "../products/AddProduct"


export const AppViews = () => {
	return <>
		<Routes>
			<Route path="/" element={
				<>
					<h1>Kandy Korner</h1>
					<Outlet />
				</>
			}>
				<Route path="locations" element={<LocationsList />} />
				<Route path="products" element={<Products />} />
				<Route path="addProduct" element={<AddProduct />} />

			</Route>
		</Routes>
	</>
}