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
        <ul className="dropdown-menu"  style={{background:"lightgreen"}}>
            <li ><button className="CurrencyChoice" style={{background:"none", width:"160px",paddingLeft:"15px",textAlign:"left","hover":{backgroundColor:"white"},border:"transparent"}} id="Dollar" value="$" name="Currency ($ Dollar)" onClick={handleselectItem}>$ Dollar</button></li>
            <li ><button className="CurrencyChoice" style={{background:"none", width:"160px",paddingLeft:"15px",textAlign:"left","hover":{backgroundColor:"white"},border:"transparent"}} value="£" name="Currency (£ Pound)" onClick={handleselectItem}>£ Pound</button></li>
            <li ><button className="CurrencyChoice" style={{background:"none", width:"160px",paddingLeft:"15px",textAlign:"left","hover":{backgroundColor:"white"},border:"transparent"}} value="€" name="Currency (€ Euro)" onClick={handleselectItem}>€ Euro </button></li>
            <li ><button className="CurrencyChoice" style={{background:"none", width:"160px",paddingLeft:"15px",textAlign:"left","hover":{backgroundColor:"white"},border:"transparent"}} value="₹" name="Currency (₹ Rupee)" onClick={handleselectItem}>₹ Rupee</button></li>
            </ul>
    </div>

    );
};
export default Currency;