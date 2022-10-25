import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Employees.css"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=user&_expand=location")
                .then(res => res.json())
                .then(employeesData => {
                    setEmployees(employeesData)
                })
        },
        []
    )

    return <>
        <h1>Employees</h1>
        <div>
            <button onClick={
                () => {
                    navigate("/employees/addEmployee")
                }
            }>Add Employee</button>
        </div>
        <div className="employees">
            {
                employees.map(
                    employee => {
                        return <div className="employee" key={`employee--${employee.id}`}>
                            <h3>{employee?.user?.name}</h3>
                            <div>Location: {employee?.location?.address}</div>
                            <div>Email: {employee?.user?.email}</div>
                        </div>
                    }
                )
            }
        </div>
    </>
}