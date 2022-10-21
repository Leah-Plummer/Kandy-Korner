/******************************************************* */
// this code is copied from the modified version of AppViews.js, 
//    which customizes the links for product views in a similar way 


import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"
import "./NavBar.css"

export const NavBar = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
        //return employee views 
        return <EmployeeNav /> 
    }
    else {
        //return customer views
        return <CustomerNav /> 
    }
}