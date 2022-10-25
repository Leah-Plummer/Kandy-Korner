import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState() 

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
            .then(res => res.json())
            .then((data) => {
                
                updateCustomer(data)
            })
        },
        [customerId]
    ) 
 
    return <section className="customer">
            <header className="customer__header">{customer?.user?.name}</header>
            <div>Email: {customer?.user?.email}</div> 
            <div>Loyalty Number: {customer?.loyaltyNumber}</div>
            
        </section>
}