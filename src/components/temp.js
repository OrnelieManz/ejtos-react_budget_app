import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "./selectcustom.css";



const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const handlecurrencyChange = (event) => {
        setnewcurrency(event.target.value);
    }

  
    return (
        <div class="custom-select-wrapper">
        <select style={{border:"transparent", background:"lightgreen", height:50, width:160}}name="Currency (£ Pound)" value={newcurrency}  onChange={handlecurrencyChange}>    
                <option value="£" name="£ Pound">Currency (£ Pound)</option>
                <option value="$" name="$ Dollar"  > $ Dollar</option>
                <option value="£" name="£ Pound" >£ Pound</option>
                <option value="€" name="€ Euro" >€ Euro</option>
                <option value="₹" name="₹ Rupee" >₹ Rupee</option>
                  </select></div>

    );
};
export default Currency;
