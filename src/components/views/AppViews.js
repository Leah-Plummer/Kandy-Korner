import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const AppViews = () => {
	
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
        //return employee views 
        return <EmployeeViews /> 
    }
    else {
        //return customer views
        return <CustomerViews /> 
    }
   
}