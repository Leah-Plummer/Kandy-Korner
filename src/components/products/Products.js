import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css"

//Component to display a list of all products.
//User can filter list to see only products costing $2 or more.
export const Products = ({searchTermState}) => {
    //useState for products
    const [products, setProducts] = useState([])
    //useState for filtered products
    const [filteredProducts, setFilteredProducts] = useState([])
    //useState for top priced
    const navigate = useNavigate()

    
    useEffect(
        () => {

            const searchedProducts = products.filter(product => {

                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
                setFilteredProducts(searchedProducts)
        },
        [ searchTermState ]
    )

    //useEffect for initial render to fetch products      http://localhost:4000/scores?_expand=student&examId=7&score_lte=80. 
    //                                                     http://localhost:4000/subjects?_sort=name&_order=asc.
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=name&_order=asc")
                .then(res => res.json())
                .then(
                    fetchedProducts => {
                        setProducts(fetchedProducts)
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            setFilteredProducts(products)
        },
        [products]
    )


    //return jsx with buttons for employees to sort by price and list products
    return <>
        
        <h1>Products</h1>
        
        {
            searchTermState ?
            
                <div className="products">
                    {
                        filteredProducts.map(
                            products => {
                                return <div className="product" key={products.id}>
                                    <h3>{products.name}</h3>
                                    <div>Price per unit: ${products.unitPrice}</div>
                                </div>
                            }
                        )
                    }
                </div>
                : ""    
        }     
    </>
}