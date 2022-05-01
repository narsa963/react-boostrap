import { useState } from "react";

const CheckBoxes =()=>{
    const [checking, setChecking] =useState(false);
    const returnHandler =(event) =>{
       setChecking(!checking)
    }
    return (
        <div>
          <input type='checkbox' />
          <label>Pay</label>
          
          <input onClick={returnHandler} type='checkbox' /> 
          <label>Return</label>

          {checking && <div>
                    <input type='checkbox' />
                <label>return to fraud</label>
                </div>}
        </div>
    )

}
export default CheckBoxes;