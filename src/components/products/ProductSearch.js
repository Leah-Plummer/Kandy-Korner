// this function will return an input field 

export const ProductSearch = ({ setterFunction }) => {     
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                    //change the state in the parent component (ProductContainer)
                       setterFunction(changeEvent.target.value) 
                    }
    
                }
            type="text" placeholder="What candy are you looking for?" />
        </div>
        )
    }