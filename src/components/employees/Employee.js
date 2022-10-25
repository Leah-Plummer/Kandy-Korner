import { Link } from "react-router-dom"

export const Employee = ({ name, id, startDate, payRate, locationId }) => {
    return <section className="employee">
                    <div>
                        <Link to={`/employees/${id}`}>Name: {id} </Link>
                    </div> 
                   

                    <div>Name: {name}</div>
                    <div>Start Date: {startDate}</div>
                    <div>payRate: {payRate}</div>
                    <div>Location Id: {locationId}</div>
                </section>

}