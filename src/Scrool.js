import React from 'react';


const Scrool = (props) =>{
    return(
        <div style={{'overflowY':'scroll', 'border' : '5px solid black', 'height':'500px'}}>
            {props.children};
        </div>

    )
    

}

export default Scrool;