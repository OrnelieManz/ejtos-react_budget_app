import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
    const { currency } = useContext(AppContext);
    const [newcurrency, setnewcurrency] = useState(currency);    
    const handlecurrencyChange = (event) => {
        setnewcurrency(event.target.value);
    }

  
    return (
        <div >
        <select className="select-options" style={{background:"lightgreen",paddingLeft:15,height:50,width:230,fontSize:22,border:"transparent"}} value={newcurrency}  onChange={handlecurrencyChange}>    
                <option className="select-option" value="£" name="£ Pound" style={{display:"none"}}>Currency (£ Pound)</option>
                <option className="select-option" value="$" name="$ Dollar" > $ Dollar</option>
                <option className="select-option" value="£" name="£ Pound" >£ Pound</option>
                <option className="select-option" value="€" name="€ Euro" >€ Euro</option>
                <option className="select-option" value="₹" name="₹ Rupee" >₹ Rupee</option>
                  </select></div>

    );
};
export default Currency;