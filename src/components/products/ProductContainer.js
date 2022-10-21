import { ProductSearch } from "./ProductSearch"
import { Products } from "./Products"
import { useState } from "react"


export const ProductContainer = () => {
   // set up state variable for search terms here
    const [searchTerms, setSearchTerms] = useState("")

    return <> 
        {/* parent component needs to pass a reference to child TicketSearch */}
        <ProductSearch setterFunction={setSearchTerms} />

        {/*TicketList needs to know what the current search terms (or state) are
        in order to filter tickets accordingly*/}
        <Products searchTermState={searchTerms} />
    </>
}