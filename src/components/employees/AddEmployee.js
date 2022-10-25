
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AddEmployee = () => {
    
    const [userProperties, update] = useState(
        {   
            name: "",
            email: "",
            isStaff: true  
        }
        )
        
    const [employeeProperties, employeeUpdate] = useState(
            {
                userId: userProperties.id, 
                startDate: "",
                payRate: "", 
                locationId: 0
                
            }
            )

    const [storeLocations, setStoreLocations] = useState([])

    //use effect for initial state
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(locationsData => {
                    setStoreLocations(locationsData)
                })
        },
        []
    )
        
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

   
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////
    
    
    
    ///////////////////////////////////////////////////////////////////////////////////////
    const handleInputChange = (event) => {
        const copy = { ...userProperties }
        copy[event.target.id] = event.target.value
        update(copy)
    }
    
    const handleEmployeeInputChange = (event) => {
        const copy = { ...employeeProperties }
        copy[event.target.id] = event.target.value
        employeeUpdate(copy)
    }
    
    const handleUserInputSelect = (event) => {
        const copy = { ...employeeProperties }
        copy[event.target.name] = parseInt(event.target.value)
        employeeUpdate(copy)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        let fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userProperties)
        }
        


        await fetch("http://localhost:8088/users", fetchOptions)
            .then(res => res.json())
            .then(kandyUserObject => {
               employeeProperties.userId = kandyUserObject.id 
            })

            fetchOptions.body = JSON.stringify(employeeProperties)
        
                    
               await fetch("http://localhost:8088/employees", fetchOptions)
                .then(res => res.json())
                .then(() => {
                    navigate("/employees") 
                })
            }

    
    return <>
        <form className="EmployeeForm">
            <h2 className="employeeForm__title">New Hire</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter first and last name."
                        value={userProperties.name}
                        onChange={handleInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        id="startDate"
                        placeholder="Enter a start Date."
                        value={employeeProperties.startDate}
                        onChange={handleEmployeeInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        id="payRate"
                        placeholder="Hourly Pay Rate."
                        value={employeeProperties.payRate}
                        onChange={handleEmployeeInputChange} />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                <label htmlFor="location"> Store Location
                    <select required id="newStoreLocation" name="locationId" onChange={handleUserInputSelect}>
                        <option value={0}>Select a store</option>
                        {storeLocations.map(
                            (location) => {
                                return (<option key={location.id} value={location.id} >{location.address}</option>)
                            }
                        )
                        }
                    </select>
                </label>
                </div>
            </fieldset>

            
          
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
}










