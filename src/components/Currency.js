import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const handlecurrencyChange = (event) => {
        setnewcurrency(event.target.value);
    }
  
    return (
        <div>
        <select className="custom-select"  value={newcurrency}  onChange={handlecurrencyChange}>
                <option defaultValue fontColor="white">Currency (£ Pound)</option>
                <option value="$" name="$ Dollar" fontSize="20px" fontColor="black" > $ Dollar</option>
                <option value="£" name="£ Pound" fontSize="20px" fontColor="black">£ Pound</option>
                <option value="€" name="€ Euro" fontSize="20px" fontColor="black">€ Euro</option>
                <option value="₹" name="₹ Rupee" fontSize="20px" fontColor="black">₹ Rupee</option>
                  </select></div>

    );
};
export default Currency;