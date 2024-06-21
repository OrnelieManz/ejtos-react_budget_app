import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
    const { currency,dispatch } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const handlecurrencyChange = (event) => {
        setnewcurrency(event.target.value);
    }

    useEffect(() => {
    
        dispatch({
                type:"CHG_CURRENCY",
                payload: newcurrency,
            });
         
        },[newcurrency,dispatch]) 
  
    return (
        <div >
        <select className="custom-select" style={{background:"lightgreen",paddingLeft:15,height:50,width:230,fontSize:22,border:"transparent"}}  onChange={handlecurrencyChange}>    
                <option  value="£" name="£ Pound" style={{display:"none"}}>Currency (£ Pound)</option>
                <option  value="$" name="$ Dollar" > $ Dollar</option>
                <option  value="£" name="£ Pound" >£ Pound</option>
                <option  value="€" name="€ Euro" >€ Euro</option>
                <option  value="₹" name="₹ Rupee" >₹ Rupee</option>
                  </select></div>

    );
};
export default Currency;