import React from 'react';
import Card from './Card';
//<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />


const CardList = ({robots}) =>{
return(
<div>
{
    robots.map((user, i) =>{
        return(
            <Card 
            key = {i}
            id = {robots[i].id}
            name = {robots[i].name}
            email = {robots[i].email}
            />
        )//return map
    }
    ) //fin map
}
</div>
) //fin return



}//fin

export default CardList;