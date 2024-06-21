import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch,budget,remaining,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    useEffect(() => {
    
        let spendings=0
       spendings=budget-remaining;
        
       if(newBudget < spendings) {
            alert("You can't reduce the budget lower than the spending. Please adjust accordingly");
            setNewBudget(spendings);
            return;
       }
        dispatch({
                type:"SET_BUDGET",
                payload: newBudget,
            });
         
        },[budget,newBudget,remaining,dispatch]) 
        
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
