import React from 'react'
import {data} from "../data"

function AssociateNgo() {
   console.log(data)
    return (
        <div>
       {data.map((res)=>{
           return (
               <>
               <li>{res.name}</li>
               <li>{res.worker}</li>
               </>
           )
       })}
        </div>
    )
}

export default AssociateNgo
