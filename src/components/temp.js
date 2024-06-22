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
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{background:"lightgreen",border:"transparent"}} value="£" onSelect={handlecurrencyChange}>Currency (£ Pound)
            <span class="caret"></span></button>
            <ul class="dropdown-menu">
                <li value="$">$ Dollar</li>
                <li value="£">£ Pound</li>
                <li value="€">€ Euro</li>
                <li value="₹">₹ Rupee</li>
            </ul>
        </div>


    );
};
export default Currency;