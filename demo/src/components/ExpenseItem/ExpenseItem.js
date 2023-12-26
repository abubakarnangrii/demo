import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {
    const expenses = [
        {
            date: "March 26, 2023",
            title: "Car Payment",
            price: "$242.56",
        },
        {
            date: "March 26, 2023",
            title: "Car Payment",
            price: "$242.56",
        },
        {
            date: "March 26, 2023",
            title: "Car Payment",
            price: "$242.56",
        },
        {
            date: "March 26, 2023",
            title: "Car Payment",
            price: "$242.56",
        },
    ];

    return (
        <div className='expense-item'>
            {expenses.map((expense, index) => (
                <div key={index}>
                    <div className='expense-item__date'>{expense.date}</div>
                    <div className='expense-item__data'>
                        <div className='expense-item__description'>{expense.title}</div>
                        <div className='expense-item__price'>{expense.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
