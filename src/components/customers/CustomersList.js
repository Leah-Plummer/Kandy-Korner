import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import { CustomerDetails } from "./CustomerDetails"
import "./Customers.css"

    // this function will set initial state, which is all customers
export const CustomersList = () => {
    
    //set up state variable
    const [customers, setCustomers] = useState([])

    //useEffect to observe change in state, and update component state
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
            .then(res => res.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        }, 
        [] 

    )

    //jsx
    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer?.user?.id}`}
                id={customer.id} 
                fullName={customer?.user?.name} 
                email={customer?.user?.email} />)

        }
    </article>

}