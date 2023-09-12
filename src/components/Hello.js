import React from "react";

const Hello = ({name,heroName}) => {
    return (
        // console.log(props),
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
            
        </div>
    )
    
 
}

export default Hello;