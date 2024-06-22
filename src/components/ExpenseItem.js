import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {BsDashCircleFill} from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
//import "./custombutton.css"
//import {Text} from 'react-native';
//import '../src/selectcustom.css';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{border:"transparent",color:"green",backgroundColor:"white",fontWeight:"bold",fontSize:"26px"}} onClick={event=> increaseAllocation(props.name)}><FaPlusCircle /></button></td>
        <td><button style={{border:"transparent",backgroundColor:"white",color:"darkred",fontWeight:"bold",fontSize:"26px"}}onClick={event=> decreaseAllocation(props.name)}><BsDashCircleFill /></button></td>
        <td><TiDelete size='2.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
