import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

 const ExpenseItem=(props)=> {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div>
                <div className='expense-item__description'>{props.title}</div>
                <div className='expense-item__price'>{props.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
