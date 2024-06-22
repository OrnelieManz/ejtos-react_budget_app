import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
    const { currency,dispatch } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const handlecurrencyChange = (e) => {
        setnewcurrency(e);
    }

    useEffect(() => {
    
        dispatch({
                type:"CHG_CURRENCY",
                payload: newcurrency,
            });
         
        },[newcurrency,dispatch]) 
  
    return (

        <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{background:"lightgreen",border:"transparent"}} value="£" onSelect={handlecurrencyChange}>Currency (£ Pound)
        <span className="caret"></span></button>
        <select className="dropdown-menu">
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro </option>
            <option value="₹">₹ Rupee</option>
            </select>
    </div>


    );
};
export default Currency;