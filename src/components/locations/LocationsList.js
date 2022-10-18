import { useEffect, useState } from "react"
//import { useNavigate } from "react-router-dom"
import "./Locations.css"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    
    useEffect(
        () => {

            fetch(`http://localhost:8088/locations`)
            .then(res => res.json())
            .then((locationsArray) => {
                setLocations(locationsArray)
            })
        },
        []
        )
        
        console.log("Initial state of locations", locations) // View the initial state of tickets
    return <>
        <h2>List of Locations</h2>

         <article className="locations">
         {
            locations.map(
                (location) => {
                    return <section key={location.id} className="location">
                        <header>{location.address}</header>
                        <footer>{location.sqFt} Square Feet</footer>
                    </section>
                }
            )
        }
    
        </article>
     </>
    }