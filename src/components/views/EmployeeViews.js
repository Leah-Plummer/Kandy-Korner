import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../locations/LocationsList"
import { AddProduct } from "../products/AddProduct"
import { ProductsList } from "../products/ProductsList" 
export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>

                    <Outlet />
                </>
            }>

            {/* when the route is "products", both the ProductSearch and Products 
            components will be the Route's elements   */}
                <Route path="locations" element={<LocationsList />} />
                <Route path="products" element={<ProductsList />} /> 
                <Route path="products/addProduct" element={<AddProduct />} />               
            </Route>
        </Routes>
    )
}