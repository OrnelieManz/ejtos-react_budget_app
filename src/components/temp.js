import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
    const { currency,dispatch } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const [selectedItem,setSelecteditem]=useState('Currency (£ Pound)')
    
    const handleselectItem = (event) => {
        setSelecteditem(event.target.name);
        setnewcurrency(event.target.value);
    }
    

    useEffect(() => {
    
        dispatch({
                type:"CHG_CURRENCY",
                payload: newcurrency,
            });
         
        },[newcurrency,dispatch]) 
  
    return (

        <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" style={{background:"lightgreen",border:"transparent"}} 
        aria-haspopup="true" aria-expanded="true" >{selectedItem}<span className="caret"></span></button>
        <ul className="dropdown-menu show"  style={{background:"lightgreen"}}>
            <li classeName="CurrencyOption"><button style={{background:"lightgreen", border:"transparent"}} id="Dollar" value="$" name="$ Dollar" onClick={handleselectItem}>$ Dollar</button></li>
            <li classeName="CurrencyOption"><button style={{background:"lightgreen", border:"transparent"}} value="£" name="£ Pound" onClick={handleselectItem}>£ Pound</button></li>
            <li classeName="CurrencyOption"><button style={{background:"lightgreen", border:"transparent"}} value="€" name="€ Euro" onClick={handleselectItem}>€ Euro </button></li>
            <li classeName="CurrencyOption"><button style={{background:"lightgreen", border:"transparent"}} value="₹" name="₹ Rupee" onClick={handleselectItem}>₹ Rupee</button></li>
            </ul>
    </div>

    );
};
export default Currency;