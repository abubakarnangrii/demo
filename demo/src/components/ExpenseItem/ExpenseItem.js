import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

export default function ExpenseItem(props) {
    

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__data'>
                <div className='expense-item__description'>{props.title}</div>
                <div className='expense-item__price'>{props.price}</div>
            </div>

        </div>
    );
}
