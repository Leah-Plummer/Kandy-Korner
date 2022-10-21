import { Outlet, Route, Routes } from "react-router-dom"
import { ProductContainer } from "../products/ProductContainer"
import { ProductsList } from "../products/ProductsList"
import { LocationsList } from "../locations/LocationsList"
//import { EmployeeDetails } from "../employees/EmployeeDetails"



export const CustomerViews = () => {
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

                <Route path="products" element={<ProductsList />} /> 
                 <Route path="findCandy" element={<ProductContainer />} />
                 <Route path="locations" element={<LocationsList />} />          
            </Route>
        </Routes>
    )
}